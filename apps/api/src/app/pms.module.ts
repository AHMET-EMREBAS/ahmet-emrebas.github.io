import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProjectModule } from '@ae/rest/pms/project/ProjectModule';

import { SprintModule } from '@ae/rest/pms/sprint/SprintModule';

import { TaskModule } from '@ae/rest/pms/task/TaskModule';

import { TagModule } from '@ae/rest/pms/tag/TagModule';

import { UserModule } from '@ae/rest/pms/user/UserModule';

import { CustomerModule } from '@ae/rest/pms/customer/CustomerModule';

import { PermissionModule } from '@ae/rest/pms/permission/PermissionModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'dist/database/pms.sqlite',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),

    ProjectModule,

    SprintModule,

    TaskModule,

    TagModule,

    UserModule,

    CustomerModule,

    PermissionModule,
  ],
})
export class PmsModule {}
