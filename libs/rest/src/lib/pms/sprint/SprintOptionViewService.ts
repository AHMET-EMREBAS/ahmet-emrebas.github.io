import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { SprintOptionView } from '@ae/models/pms/sprint/SprintOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintOptionViewService extends ResourceViewService<SprintOptionView> {
  constructor(
    @InjectRepository(SprintOptionView)
    sprintViewRepo: Repository<SprintOptionView>
  ) {
    super(sprintViewRepo);
  }
}
