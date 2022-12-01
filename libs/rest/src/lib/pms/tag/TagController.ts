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
  Controller,
  ArgId,
  ArgRid,
} from '@ae/core';
import { Tag } from '@ae/models/pms/tag/Tag';
import { TagView } from '@ae/models/pms/tag/TagView';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';
import { CreateTagDto } from '@ae/models/pms/tag/dto/CreateTagDto';
import { UpdateTagDto } from '@ae/models/pms/tag/dto/UpdateTagDto';

import { Body, Delete, Query } from '@nestjs/common';

import { TagService } from './TagService';
import { TagViewService } from './TagViewService';
import { Args } from '@nestjs/graphql';

@Controller('pms/tag', Tag)
export class TagController {
  constructor(
    private readonly service: TagService,
    private readonly viewService: TagViewService
  ) {}

  @Read(Tag)
  findTag(@Args('query') @Query() query: QueryDto<Tag & TagView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @ReadById(Tag)
  findByTagId(@ArgId() @ParamId() id: number) {
    return this.service.findOneBy({ id });
  }

  @Write(Tag)
  saveTag(@Args('tag') @Body() body: CreateTagDto) {
    return this.service.save(body);
  }

  @Update()
  updateTag(
    @ArgId() @ParamId() id: number,
    @Args('tag') @Body() body: UpdateTagDto
  ) {
    return this.service.update(id, body);
  }

  @Delete()
  deleteTag(@ArgId() @ParamId() id: number) {
    return this.service.delete(id);
  }

  @Count()
  countTag() {
    return this.service.count();
  }
}
