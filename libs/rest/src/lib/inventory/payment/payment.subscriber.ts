import { Payment } from '@ae/models/inventory/payment';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class PaymentSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Payment;
  }
}
