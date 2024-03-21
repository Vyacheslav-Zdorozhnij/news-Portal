import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { UserModule } from './user/user/user.module';
import { User } from './models/userModel';
import { Tag } from './models/tagModel';
import { Post } from './models/postModel';
import { TargetPost } from './models/tagsPostModel';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Post, Tag, TargetPost],
        autoLoadModels: true,
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
