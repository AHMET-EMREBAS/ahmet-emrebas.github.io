import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PricelevelView } from '@ae/models/pms/pricelevel/PricelevelView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PricelevelViewService extends ResourceViewService<PricelevelView> {
  constructor(
    @InjectRepository(PricelevelView)
    pricelevelViewRepo: Repository<PricelevelView>
  ) {
    super(pricelevelViewRepo);
  }
}
