import { Model, ModelWithName, ModelWithNameValue } from '@techbir/common';

export const Category: Model = ModelWithName({
  name: 'category',
  icon: 'category',
});
export const Department: Model = ModelWithName({
  name: 'department',
  icon: 'group',
});
export const Feature: Model = ModelWithNameValue({
  name: 'feature',
  icon: 'description',
});
export const Group: Model = ModelWithName({ name: 'group', icon: 'group' });
