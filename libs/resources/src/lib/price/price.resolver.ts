import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreatePriceInput,
  Price,
  UpdatePriceInput,
} from '@techbir/entities-graph';
import { PriceService, PricePubSub } from './price.service';

@Resolver(() => Price)
export class PriceResolver extends createResolver({
  entity: Price,
  createDto: CreatePriceInput,
  queryDto: QueryInput,
  pubSub: PricePubSub,
  updateDto: UpdatePriceInput,
}) {
  constructor(service: PriceService) {
    super(service);
  }
}
