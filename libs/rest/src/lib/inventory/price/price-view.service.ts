import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { PriceView } from '@ae/models/inventory/price';

@Injectable()
export class PriceViewService extends ResourceService<PriceView> {
  constructor(@InjectRepository(PriceView) __repo: Repository<PriceView>) {
    super(__repo);
  }
}
