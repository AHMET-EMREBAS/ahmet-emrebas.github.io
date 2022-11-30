import {
  Add,
  Count,
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

import { Message } from '@ae/models/ims/message/Message';
import { MessageView } from '@ae/models/ims/message/MessageView';
import { MessageOptionView } from '@ae/models/ims/message/MessageOptionView';
import { CreateMessageDto } from '@ae/models/ims/message/dto/CreateMessageDto';
import { UpdateMessageDto } from '@ae/models/ims/message/dto/UpdateMessageDto';

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

  @Set('to')
  setTo(@ParamId() id: number, @ParamRid() toId: number) {
    return this.service.set(id, toId, 'to');
  }

  @Unset('to')
  unsetTo(@ParamId() id: number) {
    return this.service.unset(id, 'to');
  }

  @Set('from')
  setFrom(@ParamId() id: number, @ParamRid() fromId: number) {
    return this.service.set(id, fromId, 'from');
  }

  @Unset('from')
  unsetFrom(@ParamId() id: number) {
    return this.service.unset(id, 'from');
  }

  @Count()
  count() {
    return this.service.count();
  }
}
