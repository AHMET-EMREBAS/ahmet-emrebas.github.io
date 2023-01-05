import { Tag } from '@ae/models/inventory/tag';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class TagSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Tag;
  }
}
