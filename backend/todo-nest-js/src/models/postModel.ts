import {
  DataType,
  Model,
  Table,
  Column,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './userModel';
import { Tag } from './tagModel';
import { TargetPost } from './tagsPostModel';

@Table({ tableName: 'post' })
export class Post extends Model<Post> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @BelongsToMany(() => Tag, () => TargetPost)
  tags: Tag[];
}
