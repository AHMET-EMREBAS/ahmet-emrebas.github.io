import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Resource } from '../auth/Resource';

export function ResourceController(resourceName: string) {
  return applyDecorators(
    ApiTags(resourceName),
    Resource(resourceName),
    Controller(resourceName)
  );
}
