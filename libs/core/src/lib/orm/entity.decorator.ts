import { Entity as E } from 'typeorm';
import { applyDecorators } from '@nestjs/common';

export function Entity() {
  return applyDecorators(E());
}
