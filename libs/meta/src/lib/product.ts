import {
  CategoryRelation,
  DescriptionProperty,
  Model,
  UniqueNameProperty,
  UpcProperty,
} from '@techbir/common';

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
