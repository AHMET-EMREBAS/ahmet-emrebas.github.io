import { Body, Query } from '@nestjs/common';
import {
  Add,
  Count,
  Options,
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
  Delete,
  Controller,
} from '@ae/core';

import { Tag } from '@ae/models/pms/tag/Tag';
import { TagView } from '@ae/models/pms/tag/TagView';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';
import { CreateTagDto } from '@ae/models/pms/tag/dto/CreateTagDto';
import { UpdateTagDto } from '@ae/models/pms/tag/dto/UpdateTagDto';

import { TagService } from './TagService';
import { TagViewService } from './TagViewService';
import { TagOptionViewService } from './TagOptionViewService';

import { Args } from '@nestjs/graphql';

@Controller('pms/tag')
export class TagController {
  constructor(
    private readonly service: TagService,
    private readonly viewService: TagViewService,
    private readonly optionViewService: TagOptionViewService
  ) {}

  @Read()
  findTag(@Query() query: QueryDto<Tag & TagView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById()
  findByTagId(@ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write()
  saveTag(@Body() body: CreateTagDto) {
    return this.service.save(body);
  }

  @Update()
  updateTag(@ParamId() id: number, @Body() body: UpdateTagDto) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTag(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countTag() {
    return this.service.count();
  }

  @Options()
  optionsTag(@Query() query: QueryDto<Tag & TagView>) {
    return this.optionViewService.find(query);
  }
}
