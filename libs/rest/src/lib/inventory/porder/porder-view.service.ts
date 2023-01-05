import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { PorderView } from '@ae/models/inventory/porder';

@Injectable()
export class PorderViewService extends ResourceService<PorderView> {
  constructor(@InjectRepository(PorderView) __repo: Repository<PorderView>) {
    super(__repo);
  }
}
