import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreatePriceLevelInput,
  PriceLevel,
  UpdatePriceLevelInput,
} from '@techbir/entities-graph';
import { PriceLevelService, PriceLevelPubSub } from './price-level.service';

@Resolver(() => PriceLevel)
export class PriceLevelResolver extends createResolver({
  entity: PriceLevel,
  createDto: CreatePriceLevelInput,
  queryDto: QueryInput,
  pubSub: PriceLevelPubSub,
  updateDto: UpdatePriceLevelInput,
}) {
  constructor(service: PriceLevelService) {
    super(service);
  }
}
