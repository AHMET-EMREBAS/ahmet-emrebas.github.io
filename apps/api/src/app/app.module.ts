import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Rest from '@ae/rest/ims';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/temp/main.sqltie',
      subscribers: [],
      synchronize: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),
    ...Object.values(Rest).filter((e) => e.name.endsWith('Module')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
