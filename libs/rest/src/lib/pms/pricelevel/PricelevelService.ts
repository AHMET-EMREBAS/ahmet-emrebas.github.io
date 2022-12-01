import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Pricelevel } from '@ae/models/pms/pricelevel/Pricelevel';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PricelevelService extends ResourceService<Pricelevel> {
  constructor(
    @InjectRepository(Pricelevel) pricelevelRepo: Repository<Pricelevel>
  ) {
    super(pricelevelRepo);
  }
}
