import { BaseInterface } from '../../common';

export interface RoleInterface<Permission> extends BaseInterface {
  name: string;

  permissions: Permission[];
}
