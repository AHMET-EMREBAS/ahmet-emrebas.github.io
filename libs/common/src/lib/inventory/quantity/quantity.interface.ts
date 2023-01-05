import { BaseInterface } from '../../common';

export interface QuantityInterface<Product, Store> extends BaseInterface {
  quantity: number;

  product: Product;

  store: Store;
}
