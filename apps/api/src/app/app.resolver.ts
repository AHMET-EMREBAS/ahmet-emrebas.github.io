import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType()
export class AppObject {
  @Field(() => String)
  name: string;
}

@Resolver(() => AppObject)
export class AppResolver {
  @Query(() => AppObject)
  appName(): AppObject {
    return {
      name: 'App Name',
    };
  }
}
