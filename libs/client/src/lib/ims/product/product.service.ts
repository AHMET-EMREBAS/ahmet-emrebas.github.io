import { ResourceService } from '../../common/ResourceService';

import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class ProductService extends ResourceService<any> {
  constructor(ef: EntityCollectionServiceElementsFactory) {
    super('Product', ef);
  }
}
