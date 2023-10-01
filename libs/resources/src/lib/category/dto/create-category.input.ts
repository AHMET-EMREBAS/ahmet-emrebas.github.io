import { Field, Input } from '@techbir/core';
import { Category } from '../entity';

@Input()
export class CreateCategoryInput implements Category {
  @Field({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
