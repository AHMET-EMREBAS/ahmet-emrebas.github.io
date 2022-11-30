import {
  Add,
  Aggregate,
  ParamId,
  ParamRid,
  QueryDto,
  Read,
  ReadById,
  Remove,
  Set,
  Unset,
  Update,
  Write,
} from '@ae/core';
import {
  Message,
  MessageView,
  CreateMessageDto,
  UpdateMessageDto,
} from '@ae/models/ims/message';
import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageService } from './MessageService';
import { MessageViewService } from './MessageViewService';

@ApiTags('message')
@Controller('message')
export class MessageController {
  constructor(
    private readonly service: MessageService,
    private readonly viewService: MessageViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Message & MessageView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findById(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  save(@Body() body: CreateMessageDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateMessageDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Set('user')
  setUser(@ParamId() id: number, @ParamRid() userId: number) {
    return this.service.set(id, userId, 'user');
  }

  @Unset('user')
  unsetUser(@ParamId() id: number) {
    return this.service.unset(id, 'user');
  }

  @Set('user')
  setUser(@ParamId() id: number, @ParamRid() userId: number) {
    return this.service.set(id, userId, 'user');
  }

  @Unset('user')
  unsetUser(@ParamId() id: number) {
    return this.service.unset(id, 'user');
  }

  @Aggregate('cont')
  count() {
    return this.service.count();
  }
}
