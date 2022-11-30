import { Department, DepartmentView } from '@ae/models/ims/department';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './DepartmentService';
import { DepartmentViewService } from './DepartmentViewService';
import { DepartmentController } from './DepartmentController';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  providers: [DepartmentService, DepartmentViewService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
