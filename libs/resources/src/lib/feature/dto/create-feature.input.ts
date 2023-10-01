import { Field, Input } from '@techbir/core';
import { Feature } from '../entity';

@Input()
export class CreateFeatureInput implements Feature {
  @Field({ type: 'string', minLength: 3, maxLength: 30 }) name?: string;
}
