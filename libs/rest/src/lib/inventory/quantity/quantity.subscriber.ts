import { Quantity } from '@ae/models/inventory/quantity';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Quantity;
  }
}
