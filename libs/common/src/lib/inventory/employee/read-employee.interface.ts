import { BaseInterface } from '../../common';

export interface ReadEmployeeInterface extends BaseInterface {
  username: string;

  password: string;

  pin: string;

  firstName: string;

  lastName: string;

  phone: string;

  role: string;
}
