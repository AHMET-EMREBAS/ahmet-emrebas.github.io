import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import {
  PriceLevel,
  CreatePriceLevelDto,
} from '@ae/models/inventory/price-level';

@Injectable()
export class PriceLevelService extends ResourceService<CreatePriceLevelDto> {
  constructor(
    @InjectRepository(PriceLevel) __repo: Repository<CreatePriceLevelDto>
  ) {
    super(__repo);
  }
}
