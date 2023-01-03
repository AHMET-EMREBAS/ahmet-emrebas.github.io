import { ResourceService } from '@ae/core/rest';
import { PriceLevel } from './price-level.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceLevelService extends ResourceService<PriceLevel> {
  constructor(@InjectRepository(PriceLevel) repo: Repository<PriceLevel>) {
    super(repo);
  }
}
