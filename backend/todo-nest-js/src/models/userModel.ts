import { DataType, Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Post } from './postModel';
@Table({ tableName: 'user' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasMany(() => Post)
  posts: [];
}
