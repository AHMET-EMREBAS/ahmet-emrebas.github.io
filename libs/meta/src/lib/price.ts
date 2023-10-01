import { Model, OwnerRelation, PriceProperty } from '@techbir/common';

export const Price: Model = {
  name: 'price',
  properties: {
    price: PriceProperty(),
    cost: PriceProperty({ name: 'cost' }),
  },
  relations: {
    product: OwnerRelation({ name: 'product', target: 'Product' }),
    priceLevel: OwnerRelation({ name: 'priceLevel', target: 'PriceLevel' }),
  },
};
