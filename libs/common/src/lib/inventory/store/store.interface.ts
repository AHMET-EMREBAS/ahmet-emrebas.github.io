import { BaseInterface } from '../../common';

export interface StoreInterface<PriceLevel> extends BaseInterface {
  name: string;

  priceLevel: PriceLevel;
}
