import { Injectable } from '@angular/core';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { CategoryFormComponent } from './category-form.component';
import { BaseNgrxService } from '@techbir/material';

@Injectable({ providedIn: 'root' })
export class CategoryFormComponentService extends BaseNgrxService<CategoryFormComponent> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Category', serviceElementsFactory);
  }
}
