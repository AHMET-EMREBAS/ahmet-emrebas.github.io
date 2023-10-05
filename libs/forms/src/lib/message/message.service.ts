import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessageService extends BaseNgrxService<Message> {
  override __columns: (keyof Message)[] = ['message'];
  override __visibleColumns: (keyof Message)[] = ['message'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Message', factory);
  }
}
