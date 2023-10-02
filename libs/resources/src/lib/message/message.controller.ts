import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateMessageDto, Message, UpdateMessageDto } from '@techbir/entities';
import { MessageService, MessagePubSub } from './message.service';

@Controller()
export class MessageController extends createController({
  createDto: CreateMessageDto,
  entity: Message,
  pubSub: MessagePubSub,
  queryDto: QueryDto,
  updateDto: UpdateMessageDto,
}) {
  constructor(service: MessageService) {
    super(service);
  }
}
