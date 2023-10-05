import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Price } from './price';

@Injectable()
export class PriceService extends BaseNgrxService<Price> {
  override __columns: (keyof Price)[] = ['price', 'cost'];
  override __visibleColumns: (keyof Price)[] = ['price', 'cost'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Price', factory);
  }
}
