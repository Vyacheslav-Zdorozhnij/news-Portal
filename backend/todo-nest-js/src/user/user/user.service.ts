import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/userModel';
import { RegisterUserDto, LoginUserDto } from './dto/userDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async reistrationUser(dto: RegisterUserDto) {
    console.log('reistrationUser >>', dto);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);
    console.log(hashedPassword);

    const user = await this.userRepository.create({
      name: dto.username,
      email: dto.email,
      password: hashedPassword,
    });
    return user;
  }

  async userLogin(dto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    const hashedPassword = await bcrypt.hash(
      dto.password,
      process.env.saltRounds,
    );
    const checkPass = await bcrypt.compareSync(dto.password, hashedPassword); // true
    if (!user || !checkPass) {
      throw new Error('Incorrect email or password');
    }
    return user;

    // const users = await this.userRepository.findAll();
    // if (users.length === 0) {
    //   throw new Error('No users in database');
    // }
    // return users;
  }

  async getAllUsers() {
    const allUsers = await this.userRepository.findAll();
    return allUsers;
  }
}
