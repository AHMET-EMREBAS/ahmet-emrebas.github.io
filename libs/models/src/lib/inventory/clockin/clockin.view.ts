import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Clockin } from './clockin.entity';

import { Employee } from '../employee';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('clockin.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY clockin.id)`, 'index')

      .addSelect('clockin.uuid', 'uuid')
      .addSelect('clockin.createdAt', 'createdAt')
      .addSelect('clockin.updatedAt', 'updatedAt')
      .addSelect('clockin.deletedAt', 'deletedAt')
      .addSelect('clockin.active', 'active')

      .addSelect('clockin.start', 'start')
      .addSelect('clockin.end', 'end')

      .addSelect('employee.id', 'eid')
      .addSelect('employee.username', 'username')
      .addSelect('employee.firstName', 'firstName')
      .addSelect('employee.lastName', 'lastName')
      .addSelect('employee.phone', 'phone')

      .from(Clockin, 'clockin')

      .leftJoin(Employee, 'employee', 'employee.id = clockin.employeeId');
  },
})
export class ClockinView {
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
  start: Date;

  @ViewColumn()
  end: Date;

  @ViewColumn()
  eid: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  firstName: string;

  @ViewColumn()
  lastName: string;

  @ViewColumn()
  phone: string;
}
