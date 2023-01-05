import { Store } from '@ae/models/inventory/store';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Store;
  }
}
