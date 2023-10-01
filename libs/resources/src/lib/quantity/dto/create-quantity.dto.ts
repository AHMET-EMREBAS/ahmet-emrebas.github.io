import { Quantity } from '../entity';
import { Property, Dto } from '@techbir/core';

@Dto()
export class CreateQuantityDto implements Quantity {
  @Property({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
