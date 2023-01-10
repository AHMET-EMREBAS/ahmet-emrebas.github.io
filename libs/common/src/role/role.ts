import { Permission } from '../permission';

export interface Role {
  id: number;
  index: number;
  name: string;
  permissions: Permission;
}
