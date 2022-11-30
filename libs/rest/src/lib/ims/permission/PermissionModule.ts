import { Permission, PermissionView } from '@ae/models/ims/permission';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionService } from './PermissionService';
import { PermissionViewService } from './PermissionViewService';
import { PermissionController } from './PermissionController';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView])],
  providers: [PermissionService, PermissionViewService],
  controllers: [PermissionController],
})
export class PermissionModule {}
