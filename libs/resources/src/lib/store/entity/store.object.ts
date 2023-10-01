import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Store } from './store.entity';

@ObjectType()
export class StoreObject extends BaseObject implements Store {
  @Field({ type: 'string' }) name?: string;
}
