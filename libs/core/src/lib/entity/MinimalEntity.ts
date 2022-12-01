import { Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class MinimalEntity extends BaseEntity {
  @Column({ type: 'text' })
  @Field(() => String)
  name: string;
}
