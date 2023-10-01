import { PubSub } from 'graphql-subscriptions';
import { QuantityObject } from './entity';

export const QuantityPubSub = new PubSub();

export const QUANTITY_SAVE = 'quantitySaveEvent';
export const QUANTITY_DELETE = 'quantityDeleteEvent';
export const QUANTITY_UPDATE = 'quantityUpdateEvent';

export function publishQuantitySave(value: QuantityObject) {
  QuantityPubSub.publish(QUANTITY_SAVE, { [QUANTITY_SAVE]: value });
}

export function publishQuantityUpdate(value: QuantityObject) {
  QuantityPubSub.publish(QUANTITY_UPDATE, { [QUANTITY_UPDATE]: value });
}

export function publishQuantityDelete(value: QuantityObject) {
  QuantityPubSub.publish(QUANTITY_DELETE, { [QUANTITY_DELETE]: value });
}

export function subscribeQuantitySave() {
  return QuantityPubSub.asyncIterator(QUANTITY_SAVE);
}

export function subscribeQuantityDelete() {
  return QuantityPubSub.asyncIterator(QUANTITY_DELETE);
}

export function subscribeQuantityUpdate() {
  return QuantityPubSub.asyncIterator(QUANTITY_UPDATE);
}
