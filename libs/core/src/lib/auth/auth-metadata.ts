import { SetMetadata } from '@nestjs/common';
import { names } from '@techbir/utils';

export const IS_PUBLIC_TOKEN = 'IS_PUBLIC';
export const PERMISSION_TOKEN = 'PERMISSION_TOKEN';

export function Public() {
  return SetMetadata(IS_PUBLIC_TOKEN, true);
}

export function Permission(permission: string) {
  return SetMetadata(PERMISSION_TOKEN, permission);
}

export function ReadPermission(entityName: string) {
  return Permission(`READ:${names(entityName).constName}`);
}

export function WritePermission(entityName: string) {
  return Permission(`WRITE:${names(entityName).constName}`);
}
