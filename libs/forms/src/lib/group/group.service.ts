import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { Group } from './group';

@Injectable()
export class GroupService extends BaseNgrxService<Group> {
  override __columns: (keyof Group)[] = ['name'];
  override __visibleColumns: (keyof Group)[] = ['name'];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Group', factory);
  }
}
