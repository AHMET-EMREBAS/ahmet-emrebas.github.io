import { User } from '@ae/models/ims/user/User';

import { Message } from '@ae/models/ims/message/Message';
import { MessageView } from '@ae/models/ims/message/MessageView';
import { MessageOptionView } from '@ae/models/ims/message/MessageOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './MessageService';
import { MessageViewService } from './MessageViewService';
import { MessageController } from './MessageController';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, MessageView, MessageOptionView, User]),
  ],
  providers: [MessageService, MessageViewService],
  controllers: [MessageController],
})
export class MessageModule {}
