import { User } from '../user';

export interface Event {
  id: number;
  index: number;
  name: string;
  message: string;
  checked: boolean;
  users: User;
}
