import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from '@ae/rest';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Entities from '@ae/models';

const ListOfEntities = Object.values(Entities);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'temp/databse/main.sqlite',
      entities: ListOfEntities,
      synchronize: true,
      dropSchema: true,
    }),
    TypeOrmModule.forFeature(ListOfEntities),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
