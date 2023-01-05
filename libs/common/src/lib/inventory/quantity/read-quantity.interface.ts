import { BaseInterface } from '../../common';

export interface ReadQuantityInterface extends BaseInterface {
  quantity: number;

  barcode: string;

  productName: string;

  name: string;
}
