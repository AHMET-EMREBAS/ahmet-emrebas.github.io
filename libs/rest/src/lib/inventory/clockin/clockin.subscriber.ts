import { Clockin } from '@ae/models/inventory/clockin';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class ClockinSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Clockin;
  }
}
