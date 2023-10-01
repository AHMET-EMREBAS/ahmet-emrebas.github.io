import { BaseObject, Field, ObjectType } from '@techbir/core';
import { Feature } from './feature.entity';

@ObjectType()
export class FeatureObject extends BaseObject implements Feature {
  @Field({ type: 'string' }) name?: string;
}
