import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Comment, CreateCommentDto } from '@ae/models/inventory/comment';

@Injectable()
export class CommentService extends ResourceService<CreateCommentDto> {
  constructor(@InjectRepository(Comment) __repo: Repository<CreateCommentDto>) {
    super(__repo);
  }
}
