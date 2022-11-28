import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import {} from '@ae/models';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/databses/main.sqlite',
      entities: [],
      synchronize: true,
      dropSchema: true,
    }),
    TypeOrmModule.forFeature([]),
  ],
})
export class AppModule {}
