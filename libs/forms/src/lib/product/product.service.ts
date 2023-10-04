import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService extends BaseNgrxService<Product> {
  override __columns: (keyof Product)[] = ['id', 'name', 'description'];
  override __visibleColumns: (keyof Product)[] = ['id', 'name', 'description'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}
