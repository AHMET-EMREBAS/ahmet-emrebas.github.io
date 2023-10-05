import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message, User, Role, Permission } from '@techbir/entities';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, Role, Permission])],
  controllers: [MessageController],
  providers: [MessageService, MessageResolver],
})
export class MessageModule {}
