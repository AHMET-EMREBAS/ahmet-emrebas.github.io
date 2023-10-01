import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Category } from './category.entity';

@ObjectType()
export class CategoryObject extends BaseObject implements Category {
  @Field({ type: 'string' }) name?: string;
}
