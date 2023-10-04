import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService extends BaseNgrxService<Product> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}
