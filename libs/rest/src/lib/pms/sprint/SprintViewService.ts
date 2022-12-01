import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { SprintView } from '@ae/models/pms/sprint/SprintView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintViewService extends ResourceViewService<SprintView> {
  constructor(
    @InjectRepository(SprintView) sprintViewRepo: Repository<SprintView>
  ) {
    super(sprintViewRepo);
  }
}
