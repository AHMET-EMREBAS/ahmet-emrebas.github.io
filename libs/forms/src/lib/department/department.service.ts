import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Department } from './department';

@Injectable()
export class DepartmentService extends BaseNgrxService<Department> {
  override __columns: (keyof Department)[] = ['name'];
  override __visibleColumns: (keyof Department)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Department', factory);
  }
}
