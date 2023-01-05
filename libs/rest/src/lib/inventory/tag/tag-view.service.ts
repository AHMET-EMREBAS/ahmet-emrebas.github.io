import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { TagView } from '@ae/models/inventory/tag';

@Injectable()
export class TagViewService extends ResourceService<TagView> {
  constructor(@InjectRepository(TagView) __repo: Repository<TagView>) {
    super(__repo);
  }
}
