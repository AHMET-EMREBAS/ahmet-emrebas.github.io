import { SetMetadata } from '@nestjs/common';

export const PUBLIC_METADATA_KEY = 'PUBLIC_METADATA_KEY';
export function Public() {
  return SetMetadata(PUBLIC_METADATA_KEY, true);
}
