import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { CommentView } from '@ae/models/inventory/comment';

@Injectable()
export class CommentViewService extends ResourceService<CommentView> {
  constructor(@InjectRepository(CommentView) __repo: Repository<CommentView>) {
    super(__repo);
  }
}
