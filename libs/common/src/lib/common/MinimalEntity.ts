import { ID } from './ID';
import { Timestamp } from './Timestamp';

export interface MinimalEntity extends Timestamp, ID {
  name: string;
}
