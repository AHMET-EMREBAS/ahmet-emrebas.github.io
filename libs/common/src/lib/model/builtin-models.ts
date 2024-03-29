import { Model } from './model';
import { DescriptionProperty, UniqueNameProperty } from './builtin-properties';

export function ModelWithName(options: Pick<Model, 'name' | 'icon'>): Model {
  return {
    properties: {
      name: UniqueNameProperty(),
    },
    ...options,
  };
}

export function ModelWithNameValue(
  options: Pick<Model, 'name' | 'icon'>
): Model {
  return {
    properties: {
      name: UniqueNameProperty(),
      value: DescriptionProperty({ name: 'value' }),
    },
    ...options,
  };
}
