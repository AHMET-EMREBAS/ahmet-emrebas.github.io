import { SetMetadata } from '@nestjs/common';
import { Operations } from './Operations';

export const PERMISSION_METADATA_KEY = 'PERMISSION_METADATA_KEY';
export function Permission(permit: Operations) {
  return SetMetadata(PERMISSION_METADATA_KEY, permit);
}
