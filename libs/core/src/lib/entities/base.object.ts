import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class BaseObject {
  @Field(() => Number, { nullable: true }) id?: number;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;
  @Field(() => Date, { nullable: true }) deletedAt?: Date;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
}
