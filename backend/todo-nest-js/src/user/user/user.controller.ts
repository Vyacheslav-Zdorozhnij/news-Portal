import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto, LoginUserDto } from './dto/userDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/register')
  registerUser(@Body() RegisterDto: RegisterUserDto) {
    return this.userService.reistrationUser(RegisterDto);
  }

  @Post('/login')
  loginUser(@Body() LoginDto: LoginUserDto) {
    return this.userService.userLogin(LoginDto);
  }

  @Get('/allUser')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
