import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagOptionViewService extends ResourceViewService<TagOptionView> {
  constructor(
    @InjectRepository(TagOptionView)
    messageViewRepo: Repository<TagOptionView>
  ) {
    super(messageViewRepo);
  }
}
