import { BaseInterface } from '../../common';

export interface TaskInterface<Employee> extends BaseInterface {
  title: string;

  description: string;

  status: string;

  employee: Employee;
}
