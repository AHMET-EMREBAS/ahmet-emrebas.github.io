import {
  EntityDataModuleConfig,
  EntityMetadataMap,
  EntityPluralNames,
} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Product: {
    selectId: (value) => value.index || value.id,
  },
};
const pluralNames: EntityPluralNames = {
  Product: 'Product',
};

export const INVENTORY_DATAMODULE_CONFIG: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
