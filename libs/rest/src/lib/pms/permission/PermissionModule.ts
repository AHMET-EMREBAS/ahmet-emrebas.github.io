import { Permission } from '@ae/models/pms/permission/Permission';
import { PermissionView } from '@ae/models/pms/permission/PermissionView';
import { PermissionOptionView } from '@ae/models/pms/permission/PermissionOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { PermissionController } from './PermissionController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Permission,
      PermissionView,
      PermissionOptionView,
    ]),
  ],
  providers: [PermissionService, PermissionViewService, PermissionController],
  controllers: [PermissionController],
})
export class PermissionModule {}
