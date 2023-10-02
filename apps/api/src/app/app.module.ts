import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppGraphModule } from './app-graph.module';
import { ResourceModules } from './resource-modules';

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
    ...ResourceModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
