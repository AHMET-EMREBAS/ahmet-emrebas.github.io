import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectModule } from '@ae/rest/pms/project/ProjectModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/pms/pms.sqlite',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),

    ProjectModule,
  ],
})
export class PmsModule {}
