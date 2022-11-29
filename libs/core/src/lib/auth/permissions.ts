import { Operations } from './Operations';
import { Permission } from './Permission';

export function CanRead() {
  return Permission(Operations.READ);
}

export function CanWrite() {
  return Permission(Operations.WRITE);
}
