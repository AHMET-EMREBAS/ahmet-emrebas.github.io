import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from '@techbir/resources';

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
  
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
