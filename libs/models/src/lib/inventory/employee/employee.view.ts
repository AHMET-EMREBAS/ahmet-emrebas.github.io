import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Employee } from './employee.entity';

import { Role } from '../role';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('employee.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY employee.id)`, 'index')

      .addSelect('employee.uuid', 'uuid')
      .addSelect('employee.createdAt', 'createdAt')
      .addSelect('employee.updatedAt', 'updatedAt')
      .addSelect('employee.deletedAt', 'deletedAt')
      .addSelect('employee.active', 'active')

      .addSelect('employee.username', 'username')
      .addSelect('employee.password', 'password')
      .addSelect('employee.pin', 'pin')
      .addSelect('employee.firstName', 'firstName')
      .addSelect('employee.lastName', 'lastName')
      .addSelect('employee.phone', 'phone')

      .addSelect('role.name', 'role')

      .from(Employee, 'employee')

      .leftJoin(Role, 'role', 'role.id = employee.roleId');
  },
})
export class EmployeeView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  createdAt: Date;

  @ViewColumn()
  updatedAt: Date;

  @ViewColumn()
  deletedAt: Date;

  @ViewColumn()
  active: boolean;

  @ViewColumn()
  uuid: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  pin: string;

  @ViewColumn()
  firstName: string;

  @ViewColumn()
  lastName: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  role: string;
}
