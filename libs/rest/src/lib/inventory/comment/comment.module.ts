import { Module, OnModuleInit } from '@nestjs/common';
import { Comment, CommentView } from '@ae/models/inventory/comment';
import { CommentController } from './comment.controller';
import { CommentViewController } from './comment-view.controller';
import { CommentService } from './comment.service';
import { CommentViewService } from './comment-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from '@ae/models/inventory/employee';
import { Task } from '@ae/models/inventory/task';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, CommentView, Employee, Task])],
  controllers: [CommentController, CommentViewController],
  providers: [CommentService, CommentViewService],
})
export class CommentModule implements OnModuleInit {
  constructor(private readonly service: CommentService) {}
  onModuleInit() {
    // Seed database
  }
}
