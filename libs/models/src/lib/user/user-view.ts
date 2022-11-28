import { DataSource, ViewColumn, ViewEntity } from 'typeorm';
import { User } from './user';

import { Permission } from '../permission';

import { Pricelevel } from '../pricelevel';

@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('user.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY user.id)`, 'index')

      .addSelect('user.fullName', 'fullName')

      .addSelect('user.username', 'username')

      .addSelect('user.password', 'password')

      .addSelect('user.phone', 'phone')

      .addSelect('permission.name', 'permission')

      .addSelect('pricelevel.name', 'pricelevel')

      .from(User, 'user')

      .leftJoin(Permission, 'permission', 'permission.id = user.permissionId')

      .leftJoin(Pricelevel, 'pricelevel', 'pricelevel.id = user.pricelevelId');
  },
})
export class UserView {
  @ViewColumn()
  index: string;

  @ViewColumn()
  id: number;

  @ViewColumn()
  fullName: string;

  @ViewColumn()
  username: string;

  @ViewColumn()
  password: string;

  @ViewColumn()
  phone: string;

  @ViewColumn()
  permission: string;

  @ViewColumn()
  pricelevel: string;
}
