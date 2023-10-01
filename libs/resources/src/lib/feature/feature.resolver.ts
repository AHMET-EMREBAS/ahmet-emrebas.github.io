import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';

import { Repository } from 'typeorm';
import { Feature, FeatureObject } from './entity';
import { CreateFeatureInput, QueryFeatureInput } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
  publishFeatureDelete,
  publishFeatureSave,
  publishFeatureUpdate,
  subscribeFeatureDelete,
  subscribeFeatureSave,
  subscribeFeatureUpdate,
} from './feature.pub';
import { ValidationPipe } from '@techbir/core';

@Resolver(() => FeatureObject)
export class FeatureResolver {
  constructor(
    @InjectRepository(Feature) private readonly repo: Repository<Feature>
  ) {}

  @Query(() => [FeatureObject])
  findFeatures(@Args('query', ValidationPipe()) query: QueryFeatureInput) {
    return this.repo.find(query);
  }

  @Query(() => FeatureObject)
  findFeaturesById(@Args('id') id: number) {
    return this.repo.findOneBy({ id });
  }

  @Mutation(() => FeatureObject)
  async createFeature(
    @Args('body', ValidationPipe()) body: CreateFeatureInput
  ) {
    const saved = await this.repo.save(body);
    publishFeatureSave(saved);
    return saved;
  }

  @Mutation(() => FeatureObject)
  async updateFeature(
    @Args('id') id: number,
    @Args('body', ValidationPipe()) body: CreateFeatureInput
  ) {
    const updated = await this.repo.update(id, body);
    publishFeatureUpdate(updated.raw);
    return updated;
  }

  @Mutation(() => FeatureObject)
  async deleteFeature(@Args('id') id: number) {
    const deleted = await this.repo.delete(id);
    publishFeatureDelete(deleted.raw);
    return deleted.raw;
  }

  @Subscription(() => FeatureObject)
  featureSaveEvent() {
    return subscribeFeatureSave();
  }

  @Subscription(() => FeatureObject)
  featureDeleteEvent() {
    return subscribeFeatureDelete();
  }

  @Subscription(() => FeatureObject)
  featureUpdateEvent() {
    return subscribeFeatureUpdate();
  }
}
