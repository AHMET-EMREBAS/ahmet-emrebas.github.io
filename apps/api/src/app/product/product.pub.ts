import { PubSub } from 'graphql-subscriptions';
import { ProductObject } from './entity';

export const ProductPubSub = new PubSub();

export const PRODUCT_SAVE = 'productSaveEvent';
export const PRODUCT_DELETE = 'productDeleteEvent';
export const PRODUCT_UPDATE = 'productUpdateEvent';

export function publishProductSave(value: ProductObject) {
  ProductPubSub.publish(PRODUCT_SAVE, { [PRODUCT_SAVE]: value });
}

export function publishProductUpdate(value: ProductObject) {
  ProductPubSub.publish(PRODUCT_UPDATE, { [PRODUCT_UPDATE]: value });
}

export function publishProductDelete(value: ProductObject) {
  ProductPubSub.publish(PRODUCT_DELETE, { [PRODUCT_DELETE]: value });
}

export function subscribeProductSave() {
  return ProductPubSub.asyncIterator(PRODUCT_SAVE);
}

export function subscribeProductDelete() {
  return ProductPubSub.asyncIterator(PRODUCT_DELETE);
}

export function subscribeProductUpdate() {
  return ProductPubSub.asyncIterator(PRODUCT_UPDATE);
}
