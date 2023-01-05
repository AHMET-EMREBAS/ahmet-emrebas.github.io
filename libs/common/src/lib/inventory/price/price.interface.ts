import { BaseInterface } from '../../common';

export interface PriceInterface<Product, PriceLevel> extends BaseInterface {
  price: number;

  cost: number;

  product: Product;

  priceLevel: PriceLevel;
}
