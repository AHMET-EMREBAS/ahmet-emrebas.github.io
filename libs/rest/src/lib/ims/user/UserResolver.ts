import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  GWriteMany,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { User } from '@ae/models/ims/user/User';
import { UserView } from '@ae/models/ims/user/UserView';
import { UserOptionView } from '@ae/models/ims/user/UserOptionView';
import { CreateUserDto } from '@ae/models/ims/user/dto/CreateUserDto';
import { UpdateUserDto } from '@ae/models/ims/user/dto/UpdateUserDto';
import { ReadUserDto } from '@ae/models/ims/user/dto/ReadUserDto';
import { QueryUserDto } from '@ae/models/ims/user/dto/QueryUserDto';

import { UserService } from './UserService';
import { UserViewService } from './UserViewService';
import { UserOptionViewService } from './UserOptionViewService';

@Resolver(User)
export class UserResolver {
  constructor(
    private readonly service: UserService,
    private readonly viewService: UserViewService,
    private readonly optionViewService: UserOptionViewService
  ) {}

  @GRead(ReadUserDto)
  findUsers(
    @Args('query', { nullable: true }) query: QueryDto<User>,
    @Args('where', { nullable: true }) where: QueryUserDto
  ) {
    return this.service.find({ ...query, where });
  }

  @GRead(UserView)
  viewUsers(
    @Args('query', { nullable: true }) query: QueryDto<UserView>,
    @Args('where', { nullable: true }) where: QueryUserDto
  ) {
    return this.viewService.find({ ...query, where });
  }

  @GReadById(ReadUserDto)
  findByUserId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GReadById(UserView)
  viewByUserId(@ArgId() id: number) {
    return this.viewService.findOneBy({ id });
  }

  @GWrite(ReadUserDto)
  saveUser(@Args('user') body: CreateUserDto) {
    return this.service.save(body);
  }

  @GWriteMany(ReadUserDto)
  saveUsers(
    @Args('users', { type: () => [CreateUserDto] })
    body: CreateUserDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateUser(@ArgId() id: number, @Args('user') body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteUser(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GAdd('permissions')
  addUserPermissions(@ArgId() id: number, @ArgRid() permissionsId: number) {
    return this.service.set(id, permissionsId, 'permissions');
  }

  @GRemove('permissions')
  removeUserPermissions(@ArgId() id: number) {
    return this.service.unset(id, 'permission');
  }

  @GSet('pricelevel')
  setUserPricelevel(@ArgId() id: number, @ArgRid() pricelevelId: number) {
    return this.service.set(id, pricelevelId, 'pricelevel');
  }

  @GUnset('pricelevel')
  unsetUserPricelevel(@ArgId() id: number) {
    return this.service.unset(id, 'pricelevel');
  }

  @GCount()
  countUser() {
    return this.service.count();
  }

  @GOptions()
  optionsUser(@Args('query') query: QueryDto<UserOptionView>) {
    return this.optionViewService.find(query);
  }
}
