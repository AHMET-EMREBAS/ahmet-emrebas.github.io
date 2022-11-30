import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionOptionView } from '@ae/models/ims/permission/PermissionOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<PermissionOptionView> {
  constructor(
    @InjectRepository(PermissionOptionView)
    messageViewRepo: Repository<PermissionOptionView>
  ) {
    super(messageViewRepo);
  }
}
