import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@ae/models/ims/user/User';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService extends ResourceService<User> {
  constructor(@InjectRepository(User) userRepo: Repository<User>) {
    super(userRepo);
  }
}
