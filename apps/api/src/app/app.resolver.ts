import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
export class AppObject {
  @Field() name: string;
}

@Resolver(() => AppObject)
export class AppResolver {
  @Query(() => AppObject)
  query() {
    return {};
  }
}
