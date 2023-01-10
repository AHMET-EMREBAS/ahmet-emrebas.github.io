import { User } from '../user';

export interface Profile {
  id: number;
  index: number;
  firstName: string;
  lastName: string;
  user: User;
}
