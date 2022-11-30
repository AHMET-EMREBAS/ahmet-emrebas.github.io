import { Department } from '@ae/models/ims/department/Department';
import { DepartmentView } from '@ae/models/ims/department/DepartmentView';
import { DepartmentOptionView } from '@ae/models/ims/department/DepartmentOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './DepartmentService';
import { DepartmentViewService } from './DepartmentViewService';
import { DepartmentController } from './DepartmentController';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Department,
      DepartmentView,
      DepartmentOptionView,
    ]),
  ],
  providers: [DepartmentService, DepartmentViewService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
