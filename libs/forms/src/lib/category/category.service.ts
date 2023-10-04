import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryService extends BaseNgrxService<Category> {
  override __columns: (keyof Category)[] = ['name'];
  override __visibleColumns: (keyof Category)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Category', factory);
  }
}
