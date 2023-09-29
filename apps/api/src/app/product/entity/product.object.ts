import { Field, ObjectType } from '@nestjs/graphql';
import { BaseObject } from '@techbir/core';
import { Product } from './product.entity';

@ObjectType()
export class ProductObject extends BaseObject implements Product {
  @Field(() => String) name: string;
}

