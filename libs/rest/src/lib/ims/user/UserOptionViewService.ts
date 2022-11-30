import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOptionView } from '@ae/models/ims/user/UserOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserOptionViewService extends ResourceViewService<UserOptionView> {
  constructor(
    @InjectRepository(UserOptionView)
    messageViewRepo: Repository<UserOptionView>
  ) {
    super(messageViewRepo);
  }
}
