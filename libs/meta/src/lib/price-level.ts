import { Model, UniqueNameProperty } from '@techbir/common';

export const PriceLevel: Model = {
  name: 'PriceLevel',
  properties: {
    name: UniqueNameProperty(),
  },
};
