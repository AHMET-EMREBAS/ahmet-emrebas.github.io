import { Controller } from '@nestjs/common';
import { QueryDto, createController } from '@techbir/core';
import { CreateFeatureDto, Feature, UpdateFeatureDto } from '@techbir/entities';
import { FeatureService, FeaturePubSub } from './feature.service';

@Controller()
export class FeatureController extends createController({
  createDto: CreateFeatureDto,
  entity: Feature,
  pubSub: FeaturePubSub,
  queryDto: QueryDto,
  updateDto: UpdateFeatureDto,
}) {
  constructor(service: FeatureService) {
    super(service);
  }
}
