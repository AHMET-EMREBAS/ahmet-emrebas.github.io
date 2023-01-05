import { Price } from '@ae/models/inventory/price';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Price;
  }
}
