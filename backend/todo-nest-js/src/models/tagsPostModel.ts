import {
  DataType,
  Model,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Post } from './postModel';
import { Tag } from './tagModel';
@Table({ tableName: 'targetPost' })
export class TargetPost extends Model<TargetPost> {
  @ForeignKey(() => Post)
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })
  postId: number;

  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER, unique: true })
  tagId: number;

  @BelongsTo(() => Post)
  post: Post;

  @BelongsTo(() => Tag)
  teg: Tag;
}
