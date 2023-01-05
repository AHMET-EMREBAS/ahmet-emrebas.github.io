import { Permission } from '@ae/models/inventory/permission';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Permission;
  }
}
