import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Product } from './product.entity';

@ObjectType()
export class ProductObject extends BaseObject implements Product {
  @Field({ type: 'string' }) name: string;
}
