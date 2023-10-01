import {
  Constructor,
  ObjectOptions,
  PropertyOptions,
  Validations,
} from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Property(options?: PropertyOptions) {
  const decorators = [Expose(), Validations(options)];
  return propertyDecorators(...decorators);
}

export function RelationProperty(options: ObjectOptions) {
  return propertyDecorators(
    Property({
      type: 'object',
      target: options.target,
      isArray: options.type?.endsWith('Many') ? true : false,
    })
  );
}
