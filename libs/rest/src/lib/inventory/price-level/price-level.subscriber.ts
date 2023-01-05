import { PriceLevel } from '@ae/models/inventory/price-level';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PriceLevelSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return PriceLevel;
  }
}
