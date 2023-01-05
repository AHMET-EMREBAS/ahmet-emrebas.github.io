import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { PriceLevelView } from '@ae/models/inventory/price-level';

@Injectable()
export class PriceLevelViewService extends ResourceService<PriceLevelView> {
  constructor(
    @InjectRepository(PriceLevelView) __repo: Repository<PriceLevelView>
  ) {
    super(__repo);
  }
}
