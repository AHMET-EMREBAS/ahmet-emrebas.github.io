import { EntityOptions, Entity as _Entity } from 'typeorm';

export function Entity(options?: EntityOptions) {
  return _Entity(options);
}
