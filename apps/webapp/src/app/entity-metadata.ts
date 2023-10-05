import {
  EntityMetadataMap,
  EntityDataModuleConfig,
  EntityMetadata,
} from '@ngrx/data';
import { Models } from '@techbir/meta';
import { names, plural } from '@techbir/utils';
const entityMetadata: EntityMetadataMap = Models.map((e) => {
  return {
    [names(e.name).className]: {
      entityName: names(e.name).className,
      selectId: (e) => e.id || 90000,
      entityDispatcherOptions: {},
    } as EntityMetadata,
  };
}).reduce((p, c) => {
  return { ...p, ...c };
});

const pluralNames = Models.map((e) => {
  return {
    [names(e.name).className]: plural(names(e.name).className),
  };
}).reduce((p, c) => {
  return {
    ...p,
    ...c,
  };
});

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

console.log(entityConfig);
