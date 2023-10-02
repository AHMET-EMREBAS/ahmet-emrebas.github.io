import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import {
  CreatePriceLevelDto,
  PriceLevel,
  UpdatePriceLevelDto,
} from '@techbir/entities';
import { PriceLevelService, PriceLevelPubSub } from './price-level.service';

@Controller()
export class PriceLevelController extends createController({
  createDto: CreatePriceLevelDto,
  entity: PriceLevel,
  pubSub: PriceLevelPubSub,
  queryDto: QueryDto,
  updateDto: UpdatePriceLevelDto,
}) {
  constructor(service: PriceLevelService) {
    super(service);
  }
}
