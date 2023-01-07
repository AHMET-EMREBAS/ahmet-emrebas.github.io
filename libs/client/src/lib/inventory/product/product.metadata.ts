import { EntityDataModuleConfig } from '@ngrx/data';

export const PRODUCT_META_DATA: EntityDataModuleConfig = {
  entityMetadata: {
    Product: {
      selectId: (p) => p.id,
    },
  },
  pluralNames: {
    Product: 'Product',
  },
};
