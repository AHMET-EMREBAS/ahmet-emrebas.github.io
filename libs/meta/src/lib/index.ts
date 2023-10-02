import * as CommonModels from './common';
import * as ProductModels from './product';
import * as UserModels from './user';

export const Models = [
  ...Object.values(CommonModels),
  ...Object.values(ProductModels),
  ...Object.values(UserModels),
];
