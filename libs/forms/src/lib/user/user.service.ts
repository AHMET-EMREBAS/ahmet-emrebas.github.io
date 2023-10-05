import { BaseNgrxService } from '@techbir/material';
import { EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService extends BaseNgrxService<User> {
  override __columns: (keyof User)[] = ['username', 'password', 'isAdmin'];
  override __visibleColumns: (keyof User)[] = [
    'username',
    'password',
    'isAdmin',
  ];

  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('User', factory);
  }
}
