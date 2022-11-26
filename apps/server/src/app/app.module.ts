import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController, ProductModule } from '@ae/rest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Product } from '@ae/models';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'temp/databse/main.sqlite',
      entities: [Product, Category],
      synchronize: true,
      dropSchema: true,
    }),
    TypeOrmModule.forFeature([Product, Category]),
    ProductModule,
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
