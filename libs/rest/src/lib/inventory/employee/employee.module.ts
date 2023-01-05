import { Employee, EmployeeView } from '@ae/models/inventory/employee';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeViewController } from './employee-view.controller';
import { EmployeeViewService } from './employee-view.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

import { Role } from '@ae/models/inventory/role';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, EmployeeView, Role])],
  controllers: [EmployeeController, EmployeeViewController],
  providers: [EmployeeService, EmployeeViewService],
})
export class EmployeeModule {}
