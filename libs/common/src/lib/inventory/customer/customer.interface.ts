import { BaseInterface } from '../../common';

export interface CustomerInterface<PriceLevel> extends BaseInterface {
  type: string;

  username: string;

  password: string;

  firstName: string;

  lastName: string;

  phone: string;

  priceLevel: PriceLevel;
}
