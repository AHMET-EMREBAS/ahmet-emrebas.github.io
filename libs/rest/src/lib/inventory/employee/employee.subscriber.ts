import { Employee } from '@ae/models/inventory/employee';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class EmployeeSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Employee;
  }
}
