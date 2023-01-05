import { BaseInterface } from '../../common';

export interface TransactionInterface<Porder> extends BaseInterface {
  orders: Porder[];
}
