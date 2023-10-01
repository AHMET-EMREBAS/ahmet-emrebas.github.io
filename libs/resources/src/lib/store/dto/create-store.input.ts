import { Field, Input } from '@techbir/core';
import { Store } from '../entity';

@Input()
export class CreateStoreInput implements Store {
  @Field({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
