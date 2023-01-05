import { Module, OnModuleInit } from '@nestjs/common';
import { Permission, PermissionView } from '@ae/models/inventory/permission';
import { PermissionController } from './permission.controller';
import { PermissionViewController } from './permission-view.controller';
import { PermissionService } from './permission.service';
import { PermissionViewService } from './permission-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, PermissionView])],
  controllers: [PermissionController, PermissionViewController],
  providers: [PermissionService, PermissionViewService],
})
export class PermissionModule implements OnModuleInit {
  constructor(private readonly service: PermissionService) {}
  onModuleInit() {
    // Seed database
  }
}
