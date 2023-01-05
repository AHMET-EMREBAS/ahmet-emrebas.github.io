import { BaseInterface } from '../../common';

export interface EmployeeInterface<Role> extends BaseInterface {
  username: string;

  password: string;

  pin: string;

  firstName: string;

  lastName: string;

  phone: string;

  roles: Role[];
}
