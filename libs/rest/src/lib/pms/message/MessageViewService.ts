import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageView } from '@ae/models/pms/message/MessageView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageViewService extends ResourceViewService<MessageView> {
  constructor(
    @InjectRepository(MessageView) messageViewRepo: Repository<MessageView>
  ) {
    super(messageViewRepo);
  }
}
