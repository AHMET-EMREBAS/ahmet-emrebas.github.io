import { PubSub } from 'graphql-subscriptions';
import { PriceObject } from './entity';

export const PricePubSub = new PubSub();

export const PRICE_SAVE = 'priceSaveEvent';
export const PRICE_DELETE = 'priceDeleteEvent';
export const PRICE_UPDATE = 'priceUpdateEvent';

export function publishPriceSave(value: PriceObject) {
  PricePubSub.publish(PRICE_SAVE, { [PRICE_SAVE]: value });
}

export function publishPriceUpdate(value: PriceObject) {
  PricePubSub.publish(PRICE_UPDATE, { [PRICE_UPDATE]: value });
}

export function publishPriceDelete(value: PriceObject) {
  PricePubSub.publish(PRICE_DELETE, { [PRICE_DELETE]: value });
}

export function subscribePriceSave() {
  return PricePubSub.asyncIterator(PRICE_SAVE);
}

export function subscribePriceDelete() {
  return PricePubSub.asyncIterator(PRICE_DELETE);
}

export function subscribePriceUpdate() {
  return PricePubSub.asyncIterator(PRICE_UPDATE);
}
