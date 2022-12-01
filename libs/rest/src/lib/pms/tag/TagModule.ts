import { Tag } from '@ae/models/pms/tag/Tag';
import { TagView } from '@ae/models/pms/tag/TagView';
import { TagOptionView } from '@ae/models/pms/tag/TagOptionView';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './TagService';
import { TagViewService } from './TagViewService';
import { TagController } from './TagController';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagView, TagOptionView])],
  providers: [TagService, TagViewService, TagController],
  controllers: [TagController],
})
export class TagModule {}
