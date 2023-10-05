import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { PriceLevel } from './price-level';

@Injectable()
export class PriceLevelService extends BaseNgrxService<PriceLevel> {
  override __columns: (keyof PriceLevel)[] = ['name'];
  override __visibleColumns: (keyof PriceLevel)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevel', factory);
  }
}
