import * as CommonModels from './common';
import * as ProductModels from './product';
import * as UserModels from './user';
import * as MessageModels from './message';

export const Models = [
  ...Object.values(CommonModels),
  ...Object.values(ProductModels),
  ...Object.values(UserModels),
  ...Object.values(MessageModels),
];
