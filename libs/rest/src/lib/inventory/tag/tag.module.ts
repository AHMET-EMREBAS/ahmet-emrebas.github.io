import { Module } from '@nestjs/common';
import { Tag, TagView } from '@ae/models/inventory/tag';
import { TagController } from './tag.controller';
import { TagViewController } from './tag-view.controller';
import { TagService } from './tag.service';
import { TagViewService } from './tag-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagView])],
  controllers: [TagController, TagViewController],
  providers: [TagService, TagViewService],
})
export class TagModule {}
