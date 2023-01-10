import { Resource } from '../resource';
import { Operation } from '../operation';

export interface Permission {
  id: number;
  index: number;

  resource: Resource;
  operation: Operation;
}
