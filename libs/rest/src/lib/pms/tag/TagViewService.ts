import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TagView } from '@ae/models/pms/tag/TagView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagViewService extends ResourceViewService<TagView> {
  constructor(@InjectRepository(TagView) tagViewRepo: Repository<TagView>) {
    super(tagViewRepo);
  }
}
