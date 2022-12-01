import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '@ae/models/pms/tag/Tag';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService extends ResourceService<Tag> {
  constructor(@InjectRepository(Tag) tagRepo: Repository<Tag>) {
    super(tagRepo);
  }
}
