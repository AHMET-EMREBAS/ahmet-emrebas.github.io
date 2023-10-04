import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_TOKEN = 'IS_PUBLIC';
export const PERMISSION_TOKEN = 'PERMISSION_TOKEN';

export function Public() {
  return SetMetadata(IS_PUBLIC_TOKEN, true);
}

export function Permission(permission: string) {
  return SetMetadata(PERMISSION_TOKEN, permission);
}
