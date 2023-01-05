import { Customer } from '@ae/models/inventory/customer';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Customer;
  }
}
