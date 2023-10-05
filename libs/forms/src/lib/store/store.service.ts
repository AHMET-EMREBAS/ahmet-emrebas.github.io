import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Store } from './store';

@Injectable()
export class StoreService extends BaseNgrxService<Store> {
  override __columns: (keyof Store)[] = ['name'];
  override __visibleColumns: (keyof Store)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Store', factory);
  }
}
