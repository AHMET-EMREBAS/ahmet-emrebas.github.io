import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResourceService } from '@techbir/core';
import { Message } from '@techbir/entities';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

export const MessagePubSub = new PubSub();

@Injectable()
export class MessageService extends ResourceService {
  constructor(@InjectRepository(Message) repo: Repository<Message>) {
    super(repo, []);
  }
}
