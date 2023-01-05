import { BaseInterface } from '../../common';

export interface ClockinInterface<Employee> extends BaseInterface {
  start: Date;

  end: Date;

  employee: Employee;
}
