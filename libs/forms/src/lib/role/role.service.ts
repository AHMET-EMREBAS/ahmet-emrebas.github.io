import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable()
export class RoleService extends BaseNgrxService<Role> {
  override __columns: (keyof Role)[] = ['name'];
  override __visibleColumns: (keyof Role)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Role', factory);
  }
}
