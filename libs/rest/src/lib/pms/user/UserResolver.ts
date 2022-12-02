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
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { User } from '@ae/models/pms/user/User';
import { UserView } from '@ae/models/pms/user/UserView';
import { UserOptionView } from '@ae/models/pms/user/UserOptionView';
import { CreateUserDto } from '@ae/models/pms/user/dto/CreateUserDto';
import { UpdateUserDto } from '@ae/models/pms/user/dto/UpdateUserDto';

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

  @GRead(User)
  findUser(@Args('query') query: QueryDto<User & UserView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(User)
  findByUserId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(User)
  saveUser(@Args('user') body: CreateUserDto) {
    return this.service.save(body);
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
  optionsUser(@Args('query') query: QueryDto<User & UserView>) {
    return this.optionViewService.find(query);
  }
}
