import { Transaction } from '@ae/models/inventory/transaction';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class TransactionSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Transaction;
  }
}
