import { Product } from '@ae/models/inventory/product';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Product;
  }
}
