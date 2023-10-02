import { PropertyOptions, RelationOptions, Validations } from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Property(options?: PropertyOptions | RelationOptions) {
  const decorators = [Expose(), Validations(options)];
  return propertyDecorators(...decorators);
}
