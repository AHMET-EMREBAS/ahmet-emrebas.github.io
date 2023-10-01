import { Model, UniqueNameProperty } from '@techbir/common';

export const Category: Model = {
  name: 'category',
  properties: {
    name: UniqueNameProperty(),
  },
};
