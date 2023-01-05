import { BaseInterface } from '../../common';

export interface TransactionInterface<Order> extends BaseInterface {
  orders: Order[];
}
