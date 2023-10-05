import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Permission } from './permission';

@Injectable()
export class PermissionService extends BaseNgrxService<Permission> {
  override __columns: (keyof Permission)[] = ['name'];
  override __visibleColumns: (keyof Permission)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Permission', factory);
  }
}
