import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class QueryProductArg {
  @Field(() => Int) take: number;
  @Field(() => Int) skip: number;
}
