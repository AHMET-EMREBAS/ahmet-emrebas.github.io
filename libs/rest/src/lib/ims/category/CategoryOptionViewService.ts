import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryOptionView } from '@ae/models/ims/category/CategoryOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<CategoryOptionView> {
  constructor(
    @InjectRepository(CategoryOptionView)
    messageViewRepo: Repository<CategoryOptionView>
  ) {
    super(messageViewRepo);
  }
}
