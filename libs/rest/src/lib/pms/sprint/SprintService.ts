import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Sprint } from '@ae/models/pms/sprint/Sprint';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SprintService extends ResourceService<Sprint> {
  constructor(@InjectRepository(Sprint) sprintRepo: Repository<Sprint>) {
    super(sprintRepo);
  }
}
