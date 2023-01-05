import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { ClockinView } from '@ae/models/inventory/clockin';

@Injectable()
export class ClockinViewService extends ResourceService<ClockinView> {
  constructor(@InjectRepository(ClockinView) __repo: Repository<ClockinView>) {
    super(__repo);
  }
}
