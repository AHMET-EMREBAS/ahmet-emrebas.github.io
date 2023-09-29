import { SchemaObject, Validations } from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Property(options?: SchemaObject) {
  const decorators = [Expose(), Validations(options)];
  return propertyDecorators(...decorators);
}
