import { Field, Input } from '@techbir/core';
import { Product } from '../entity';

@Input()
export class CreateProductInput implements Product {
  @Field({ type: 'string', minLength: 3, maxLength: 30 }) name: string;
}
