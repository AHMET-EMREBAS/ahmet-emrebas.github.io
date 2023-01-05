import { Module } from '@nestjs/common';
import { Employee, EmployeeView } from '@ae/models/inventory/employee';
import { EmployeeController } from './employee.controller';
import { EmployeeViewController } from './employee-view.controller';
import { EmployeeService } from './employee.service';
import { EmployeeViewService } from './employee-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Role } from '@ae/models/inventory/role';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmployeeView, Role])],
  controllers: [EmployeeController, EmployeeViewController],
  providers: [EmployeeService, EmployeeViewService],
})
export class EmployeeModule {}
