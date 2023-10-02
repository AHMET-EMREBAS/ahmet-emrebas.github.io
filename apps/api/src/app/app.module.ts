import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CategoryModule,
  PriceLevelModule,
  PriceModule,
  ProductModule,
} from '@techbir/resources';
import { AppGraphModule } from './app-graph.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'testdb',
      username: 'testuser',
      password: 'testuser',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    AppGraphModule,
    ProductModule,
    PriceModule,
    CategoryModule,
    PriceLevelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
