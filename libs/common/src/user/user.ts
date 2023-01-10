import { Role } from '../role';

export interface User {
  id: number;
  index: number;
  username: string;
  password: string;
  roles: Role[];
}
