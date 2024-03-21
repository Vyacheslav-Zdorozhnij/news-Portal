import {
  DataType,
  Model,
  Table,
  Column,
  BelongsToMany,
} from 'sequelize-typescript';
import { Post } from './postModel';
import { TargetPost } from './tagsPostModel';

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Post, () => TargetPost)
  posts: Post[];
}
