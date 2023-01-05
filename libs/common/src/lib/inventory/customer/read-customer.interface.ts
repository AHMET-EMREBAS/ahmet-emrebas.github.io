import { BaseInterface } from '../../common';

export interface ReadCustomerInterface extends BaseInterface {
  type: string;

  username: string;

  password: string;

  firstName: string;

  lastName: string;

  phone: string;

  priceLevel: string;
}
