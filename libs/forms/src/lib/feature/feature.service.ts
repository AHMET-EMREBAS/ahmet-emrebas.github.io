import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable()
export class FeatureService extends BaseNgrxService<Feature> {
  override __columns: (keyof Feature)[] = ['name', 'value'];
  override __visibleColumns: (keyof Feature)[] = ['name', 'value'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Feature', factory);
  }
}
