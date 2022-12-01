import { ClassConstructor } from 'class-transformer';
import { Resolver } from '@nestjs/graphql';
import { applyDecorators, Controller as __Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Resource } from '../auth/Resource';

export function Controller(resourceName: string, obj: ClassConstructor<any>) {
  return applyDecorators(
    ApiTags(resourceName),
    Resource(resourceName),
    __Controller(resourceName),
    Resolver(() => obj)
  );
}
