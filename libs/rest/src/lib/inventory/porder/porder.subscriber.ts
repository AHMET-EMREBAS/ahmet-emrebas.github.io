import { Porder } from '@ae/models/inventory/porder';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PorderSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Porder;
  }
}
