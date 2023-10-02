import { ClassConstructor } from '@techbir/utils';
import { PubSub } from 'graphql-subscriptions';

export type ResourceClasses = {
  entity: ClassConstructor<any>;
  createDto: ClassConstructor<any>;
  updateDto: ClassConstructor<any>;
  queryDto: ClassConstructor<any>;
  pubSub: PubSub;
};


