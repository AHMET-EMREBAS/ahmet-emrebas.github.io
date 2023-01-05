import { Role } from '@ae/models/inventory/role';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class RoleSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Role;
  }
}
