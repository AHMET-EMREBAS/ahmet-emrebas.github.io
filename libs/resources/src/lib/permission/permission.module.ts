import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '@techbir/entities';
import { PermissionResolver } from './permission.resolver';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  controllers: [PermissionController],
  providers: [PermissionService, PermissionResolver],
})
export class PermissionModule {}
