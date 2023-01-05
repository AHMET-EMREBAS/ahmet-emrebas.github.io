import { BaseInterface } from '../../common';

export interface ReadPriceInterface extends BaseInterface {
  price: number;

  cost: number;

  barcode: string;

  name: string;

  priceLevel: string;
}
