import {
  CategoryRelation,
  DescriptionProperty,
  Model,
  ModelWithName,
  OwnerRelation,
  PriceProperty,
  SubManyRelation,
  UniqueNameProperty,
  UpcProperty,
} from '@techbir/common';

export const PriceLevel: Model = ModelWithName({ name: 'price-level' });

export const Store: Model = {
  name: 'store',
  properties: {
    name: UniqueNameProperty(),
  },
  relations: {
    priceLevel: SubManyRelation({ name: 'price-level', target: 'PriceLevel' }),
  },
};

export const Price: Model = {
  name: 'price',
  properties: {
    price: PriceProperty(),
    cost: PriceProperty({ name: 'cost', label: 'Cost', icon: 'money_off' }),
  },
  relations: {
    product: OwnerRelation({ name: 'product', target: 'Product' }),
    priceLevel: OwnerRelation({ name: 'priceLevel', target: 'PriceLevel' }),
  },
};

export const Product: Model = {
  name: 'product',
  properties: {
    name: UniqueNameProperty(),
    description: DescriptionProperty(),
    upc: UpcProperty(),
  },
  relations: {
    category: CategoryRelation(),
  },
};
