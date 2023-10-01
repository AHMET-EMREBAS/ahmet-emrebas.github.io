import { Feature } from '../entity';
import { Property, Dto } from '@techbir/core';

@Dto()
export class CreateFeatureDto implements Feature {
  @Property({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
