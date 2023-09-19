import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Sample } from './sample';

@Injectable({ providedIn: 'root' })
export class SampleService extends EntityCollectionServiceBase<Sample> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Sample', serviceElementsFactory);
  }
}
