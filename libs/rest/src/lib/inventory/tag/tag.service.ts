import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Tag, CreateTagDto } from '@ae/models/inventory/tag';

@Injectable()
export class TagService extends ResourceService<CreateTagDto> {
  constructor(@InjectRepository(Tag) __repo: Repository<CreateTagDto>) {
    super(__repo);
  }
}
