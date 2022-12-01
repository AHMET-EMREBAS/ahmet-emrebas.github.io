import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '@ae/models/pms/message/Message';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService extends ResourceService<Message> {
  constructor(@InjectRepository(Message) messageRepo: Repository<Message>) {
    super(messageRepo);
  }
}
