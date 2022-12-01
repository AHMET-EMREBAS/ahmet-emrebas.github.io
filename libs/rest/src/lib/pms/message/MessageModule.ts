import { User } from '@ae/models/pms/user/User';

import { Message } from '@ae/models/pms/message/Message';
import { MessageView } from '@ae/models/pms/message/MessageView';
import { MessageOptionView } from '@ae/models/pms/message/MessageOptionView';

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
