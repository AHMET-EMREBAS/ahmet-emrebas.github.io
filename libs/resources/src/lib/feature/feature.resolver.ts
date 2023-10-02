import { Resolver } from '@nestjs/graphql';
import { QueryInput, createResolver } from '@techbir/core';
import {
  CreateFeatureInput,
  Feature,
  UpdateFeatureInput,
} from '@techbir/entities-graph';
import { FeatureService, FeaturePubSub } from './feature.service';

@Resolver(() => Feature)
export class FeatureResolver extends createResolver({
  entity: Feature,
  createDto: CreateFeatureInput,
  queryDto: QueryInput,
  pubSub: FeaturePubSub,
  updateDto: UpdateFeatureInput,
}) {
  constructor(service: FeatureService) {
    super(service);
  }
}
