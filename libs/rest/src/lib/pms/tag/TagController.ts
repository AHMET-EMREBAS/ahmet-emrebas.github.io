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

import { Tag } from '@ae/models/pms/tag/Tag';
import { TagView } from '@ae/models/pms/tag/TagView';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';
import { CreateTagDto } from '@ae/models/pms/tag/dto/CreateTagDto';
import { UpdateTagDto } from '@ae/models/pms/tag/dto/UpdateTagDto';

import { Body, Controller, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagService } from './TagService';
import { TagViewService } from './TagViewService';

@ApiTags('pms | Tag')
@Controller('pms/tag')
export class TagController {
  constructor(
    private readonly service: TagService,
    private readonly viewService: TagViewService
  ) {}

  @Read()
  find(@Query() query: QueryDto<Tag & TagView>) {
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
  save(@Body() body: CreateTagDto) {
    return this.service.save(body);
  }

  @Update()
  update(@ParamId() id: number, @Body() body: UpdateTagDto) {
    return this.service.update(id, body);
  }

  @Delete()
  delete(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  count() {
    return this.service.count();
  }
}
