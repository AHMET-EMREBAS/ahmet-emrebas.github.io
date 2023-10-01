import { Store } from '../entity';
import { Property, Dto } from '@techbir/core';

@Dto()
export class CreateStoreDto implements Store {
  @Property({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
