import { Permission } from '@ae/models/pms/permission/Permission';
import { PermissionView } from '@ae/models/pms/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/pms/permission/PermissionOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { PermissionOptionViewService } from './PermissionOptionViewService';

import { PermissionController } from './PermissionController';
import { PermissionResolver } from './PermissionResolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Permission,
      PermissionView,
      PermissionOptionView,
    ]),
  ],
  providers: [
    PermissionService,
    PermissionViewService,
    PermissionOptionViewService,
    PermissionResolver,
  ],
  controllers: [PermissionController],
})
export class PermissionModule {}
