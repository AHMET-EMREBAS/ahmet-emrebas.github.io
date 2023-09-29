import { Product } from '../entity';
import { Property, Dto } from '@techbir/core';

@Dto()
export class CreateProductDto implements Product {
  @Property({ type: 'string', minLength: 3, maxLength: 30 }) name: string;
}
