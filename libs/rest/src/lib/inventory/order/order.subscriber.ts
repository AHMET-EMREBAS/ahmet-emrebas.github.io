import { Order } from '@ae/models/inventory/order';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Order;
  }
}
