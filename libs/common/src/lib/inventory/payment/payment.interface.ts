import { BaseInterface } from '../../common';

export interface PaymentInterface<Porder> extends BaseInterface {
  orders: Porder[];
}
