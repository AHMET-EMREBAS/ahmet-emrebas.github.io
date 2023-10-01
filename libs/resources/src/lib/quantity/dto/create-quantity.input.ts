import { Field, Input } from '@techbir/core';
import { Quantity } from '../entity';

@Input()
export class CreateQuantityInput implements Quantity {
  @Field({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
