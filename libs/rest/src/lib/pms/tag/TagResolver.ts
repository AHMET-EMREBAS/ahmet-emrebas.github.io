import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Tag } from '@ae/models/pms/tag/Tag';
import { TagView } from '@ae/models/pms/tag/TagView';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';
import { CreateTagDto } from '@ae/models/pms/tag/dto/CreateTagDto';
import { UpdateTagDto } from '@ae/models/pms/tag/dto/UpdateTagDto';

import { TagService } from './TagService';
import { TagViewService } from './TagViewService';
import { TagOptionViewService } from './TagOptionViewService';

@Resolver(Tag)
export class TagResolver {
  constructor(
    private readonly service: TagService,
    private readonly viewService: TagViewService,
    private readonly optionViewService: TagOptionViewService
  ) {}

  @GRead(Tag)
  findTag(@Args('query') query: QueryDto<Tag & TagView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Tag)
  findByTagId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Tag)
  saveTag(@Args('tag') body: CreateTagDto) {
    return this.service.save(body);
  }

  @GUpdate()
  updateTag(@ArgId() id: number, @Args('tag') body: UpdateTagDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteTag(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GCount()
  countTag() {
    return this.service.count();
  }

  @GOptions()
  optionsTag(@Args('query') query: QueryDto<Tag & TagView>) {
    return this.optionViewService.find(query);
  }
}
