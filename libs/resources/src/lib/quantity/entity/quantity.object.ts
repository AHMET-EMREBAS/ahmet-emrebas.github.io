import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Quantity } from './quantity.entity';

@ObjectType()
export class QuantityObject extends BaseObject implements Quantity {
  @Field({ type: 'string' }) name?: string;
}
