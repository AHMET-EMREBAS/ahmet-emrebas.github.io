import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { UserView } from '@ae/models/ims/user/UserView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserViewService extends ResourceViewService<UserView> {
  constructor(@InjectRepository(UserView) userViewRepo: Repository<UserView>) {
    super(userViewRepo);
  }
}
