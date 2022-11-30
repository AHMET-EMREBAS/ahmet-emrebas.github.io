import { User } from '@ae/models/ims/user';

import { Message, MessageView } from '@ae/models/ims/message';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './MessageService';
import { MessageViewService } from './MessageViewService';
import { MessageController } from './MessageController';

@Module({
  imports: [TypeOrmModule.forFeature([Message, MessageView, User])],
  providers: [MessageService, MessageViewService],
  controllers: [MessageController],
})
export class MessageModule {}
