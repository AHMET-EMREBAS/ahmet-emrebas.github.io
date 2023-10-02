import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class BaseInput {
  @Field(() => Number, { nullable: true }) id?: number;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;
  @Field(() => Date, { nullable: true }) deletedAt?: Date;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
}
