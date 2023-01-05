import { Task } from '@ae/models/inventory/task';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class TaskSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Task;
  }
}
