import { Department } from '@ae/models/inventory/department';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Department;
  }
}
