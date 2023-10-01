import { Category } from '../entity';
import { Property, Dto } from '@techbir/core';

@Dto()
export class CreateCategoryDto implements Category {
  @Property({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
