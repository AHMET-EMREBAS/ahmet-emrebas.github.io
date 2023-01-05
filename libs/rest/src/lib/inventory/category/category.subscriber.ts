import { Category } from '@ae/models/inventory/category';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Category;
  }
}
