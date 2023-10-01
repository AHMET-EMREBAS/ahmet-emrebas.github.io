import { Field, ObjectType, BaseInput } from '@techbir/core';
import { Product } from './../product';
import { PriceLevel } from './../price-level';
@ObjectType()
export class Price extends BaseInput {
  @Field({
    name: 'price',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  price?: number = 0;
  @Field({
    name: 'cost',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: 9007199254740991,
  })
  cost?: number = 0;
  @Field({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'product',
    target: Product,
  })
  product?: Product;
  @Field({
    type: 'ManyToOne',
    onDelete: 'CASCADE',
    join: true,
    eager: true,
    name: 'priceLevel',
    target: PriceLevel,
  })
  priceLevel?: PriceLevel;
}
