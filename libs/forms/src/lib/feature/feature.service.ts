import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable()
export class FeatureService extends BaseNgrxService<Feature> {
  override __columns: (keyof Feature)[] = ['name', 'description'];
  override __visibleColumns: (keyof Feature)[] = ['name', 'description'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Feature', factory);
  }
}
