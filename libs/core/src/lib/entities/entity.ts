import { classDecorators } from '@techbir/utils';
import { Exclude } from 'class-transformer';
import { EntityOptions, Entity as _Entity } from 'typeorm';

export function Entity(options?: EntityOptions) {
  return classDecorators(Exclude(), _Entity(options));
}
