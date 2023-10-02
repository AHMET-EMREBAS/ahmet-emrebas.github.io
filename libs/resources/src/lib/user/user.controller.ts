import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateUserDto, User, UpdateUserDto } from '@techbir/entities';
import { UserService, UserPubSub } from './user.service';

@Controller()
export class UserController extends createController({
  createDto: CreateUserDto,
  entity: User,
  pubSub: UserPubSub,
  queryDto: QueryDto,
  updateDto: UpdateUserDto,
}) {
  constructor(service: UserService) {
    super(service);
  }
}
