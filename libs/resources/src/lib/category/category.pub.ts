import { PubSub } from 'graphql-subscriptions';
import { CategoryObject } from './entity';

export const CategoryPubSub = new PubSub();

export const CATEGORY_SAVE = 'categorySaveEvent';
export const CATEGORY_DELETE = 'categoryDeleteEvent';
export const CATEGORY_UPDATE = 'categoryUpdateEvent';

export function publishCategorySave(value: CategoryObject) {
  CategoryPubSub.publish(CATEGORY_SAVE, { [CATEGORY_SAVE]: value });
}

export function publishCategoryUpdate(value: CategoryObject) {
  CategoryPubSub.publish(CATEGORY_UPDATE, { [CATEGORY_UPDATE]: value });
}

export function publishCategoryDelete(value: CategoryObject) {
  CategoryPubSub.publish(CATEGORY_DELETE, { [CATEGORY_DELETE]: value });
}

export function subscribeCategorySave() {
  return CategoryPubSub.asyncIterator(CATEGORY_SAVE);
}

export function subscribeCategoryDelete() {
  return CategoryPubSub.asyncIterator(CATEGORY_DELETE);
}

export function subscribeCategoryUpdate() {
  return CategoryPubSub.asyncIterator(CATEGORY_UPDATE);
}
