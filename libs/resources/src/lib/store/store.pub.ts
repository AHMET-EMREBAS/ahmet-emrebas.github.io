import { PubSub } from 'graphql-subscriptions';
import { StoreObject } from './entity';

export const StorePubSub = new PubSub();

export const STORE_SAVE = 'storeSaveEvent';
export const STORE_DELETE = 'storeDeleteEvent';
export const STORE_UPDATE = 'storeUpdateEvent';

export function publishStoreSave(value: StoreObject) {
  StorePubSub.publish(STORE_SAVE, { [STORE_SAVE]: value });
}

export function publishStoreUpdate(value: StoreObject) {
  StorePubSub.publish(STORE_UPDATE, { [STORE_UPDATE]: value });
}

export function publishStoreDelete(value: StoreObject) {
  StorePubSub.publish(STORE_DELETE, { [STORE_DELETE]: value });
}

export function subscribeStoreSave() {
  return StorePubSub.asyncIterator(STORE_SAVE);
}

export function subscribeStoreDelete() {
  return StorePubSub.asyncIterator(STORE_DELETE);
}

export function subscribeStoreUpdate() {
  return StorePubSub.asyncIterator(STORE_UPDATE);
}
