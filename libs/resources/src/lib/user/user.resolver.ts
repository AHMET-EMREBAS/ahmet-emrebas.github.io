import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateUserInput,
  User,
  UpdateUserInput,
} from '@techbir/entities-graph';
import { UserService, UserPubSub } from './user.service';

@Resolver(() => User)
export class UserResolver extends createResolver({
  entity: User,
  createDto: CreateUserInput,
  queryDto: QueryInput,
  pubSub: UserPubSub,
  updateDto: UpdateUserInput,
}) {
  constructor(service: UserService) {
    super(service);
  }
}
