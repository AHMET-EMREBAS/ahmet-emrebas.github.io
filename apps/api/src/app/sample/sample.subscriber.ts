import {
  AfterInsert,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Sample } from './entity';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Sample;
  }

  @AfterInsert()
  async afterInsert(event: InsertEvent<Sample>) {
    console.log(`[Sample] new sample id ${event.entity.id}`);
  }
}
