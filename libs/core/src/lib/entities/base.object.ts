import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export class BaseObject {
  @Field(() => Number) id?: number;
  @Field(() => Date) updatedAt?: Date;
  @Field(() => Date) deletedAt?: Date;
  @Field(() => Date) createdAt?: Date;
}
