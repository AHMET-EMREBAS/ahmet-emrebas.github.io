import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateMessageInput,
  Message,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { MessageService, MessagePubSub } from './message.service';

@Resolver(() => Message)
export class MessageResolver extends createResolver({
  entity: Message,
  createDto: CreateMessageInput,
  queryDto: QueryInput,
  pubSub: MessagePubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: MessageService) {
    super(service);
  }
}
