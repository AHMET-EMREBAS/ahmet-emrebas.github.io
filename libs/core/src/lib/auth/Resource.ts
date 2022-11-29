import { SetMetadata } from '@nestjs/common';

export const RESOURCE_METADATA_KEY = 'RESOURCE_METADATA_KEY';
export function Resource(name: string) {
  return SetMetadata(RESOURCE_METADATA_KEY, name);
}
