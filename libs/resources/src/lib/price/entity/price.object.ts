import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Price } from './price.entity';
import { ProductObject } from '../../product';

@ObjectType()
export class PriceObject extends BaseObject implements Price {
  @Field({ type: 'number', nullable: true }) price?: number;

  @Field({ type: 'number', nullable: true }) cost?: number;

  @Field({ type: 'object', target: ProductObject, nullable: true })
  product?: any;
}
