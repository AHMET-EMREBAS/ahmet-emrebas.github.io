import { Module, OnModuleInit } from '@nestjs/common';
import { Department, DepartmentView } from '@ae/models/inventory/department';
import { DepartmentController } from './department.controller';
import { DepartmentViewController } from './department-view.controller';
import { DepartmentService } from './department.service';
import { DepartmentViewService } from './department-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentView])],
  controllers: [DepartmentController, DepartmentViewController],
  providers: [DepartmentService, DepartmentViewService],
})
export class DepartmentModule implements OnModuleInit {
  constructor(private readonly service: DepartmentService) {}
  onModuleInit() {
    // Seed database
  }
}
