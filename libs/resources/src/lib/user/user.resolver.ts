import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateUserInput,
  User,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { UserService, UserPubSub } from './user.service';

@Resolver(() => User)
export class UserResolver extends createResolver({
  entity: User,
  createDto: CreateUserInput,
  queryDto: QueryInput,
  pubSub: UserPubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: UserService) {
    super(service);
  }
}
