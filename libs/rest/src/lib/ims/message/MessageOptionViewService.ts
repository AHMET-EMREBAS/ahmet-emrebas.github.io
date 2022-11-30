import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageOptionView } from '@ae/models/ims/message/MessageOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<MessageOptionView> {
  constructor(
    @InjectRepository(MessageOptionView)
    messageViewRepo: Repository<MessageOptionView>
  ) {
    super(messageViewRepo);
  }
}
