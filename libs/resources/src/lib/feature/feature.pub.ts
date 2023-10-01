import { PubSub } from 'graphql-subscriptions';
import { FeatureObject } from './entity';

export const FeaturePubSub = new PubSub();

export const FEATURE_SAVE = 'featureSaveEvent';
export const FEATURE_DELETE = 'featureDeleteEvent';
export const FEATURE_UPDATE = 'featureUpdateEvent';

export function publishFeatureSave(value: FeatureObject) {
  FeaturePubSub.publish(FEATURE_SAVE, { [FEATURE_SAVE]: value });
}

export function publishFeatureUpdate(value: FeatureObject) {
  FeaturePubSub.publish(FEATURE_UPDATE, { [FEATURE_UPDATE]: value });
}

export function publishFeatureDelete(value: FeatureObject) {
  FeaturePubSub.publish(FEATURE_DELETE, { [FEATURE_DELETE]: value });
}

export function subscribeFeatureSave() {
  return FeaturePubSub.asyncIterator(FEATURE_SAVE);
}

export function subscribeFeatureDelete() {
  return FeaturePubSub.asyncIterator(FEATURE_DELETE);
}

export function subscribeFeatureUpdate() {
  return FeaturePubSub.asyncIterator(FEATURE_UPDATE);
}
