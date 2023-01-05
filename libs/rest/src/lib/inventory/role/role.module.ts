import { Module } from '@nestjs/common';
import { Role, RoleView } from '@ae/models/inventory/role';
import { RoleController } from './role.controller';
import { RoleViewController } from './role-view.controller';
import { RoleService } from './role.service';
import { RoleViewService } from './role-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Permission } from '@ae/models/inventory/permission';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RoleView, Permission])],
  controllers: [RoleController, RoleViewController],
  providers: [RoleService, RoleViewService],
})
export class RoleModule {}
