import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { PricelevelOptionView } from '@ae/models/ims/pricelevel/PricelevelOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PricelevelOptionViewService extends ResourceViewService<PricelevelOptionView> {
  constructor(
    @InjectRepository(PricelevelOptionView)
    messageViewRepo: Repository<PricelevelOptionView>
  ) {
    super(messageViewRepo);
  }
}
