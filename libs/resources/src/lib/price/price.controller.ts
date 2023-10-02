import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreatePriceDto, Price, UpdatePriceDto } from '@techbir/entities';
import { PriceService, PricePubSub } from './price.service';

@Controller()
export class PriceController extends createController({
  createDto: CreatePriceDto,
  entity: Price,
  pubSub: PricePubSub,
  queryDto: QueryDto,
  updateDto: UpdatePriceDto,
}) {
  constructor(service: PriceService) {
    super(service);
  }
}
