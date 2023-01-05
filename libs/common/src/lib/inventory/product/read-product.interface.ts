import { BaseInterface } from '../../common';

export interface ReadProductInterface extends BaseInterface {
  name: string;

  price: number;

  cost: number;

  quantity: number;

  barcode: string;

  category: string;

  department: string;
}
