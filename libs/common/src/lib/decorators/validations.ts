import { propertyDecorators } from '@techbir/utils';
import { PropertyOptions, RelationOptions } from '../model';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidationOptions,
} from 'class-validator';
export function Validations(o?: PropertyOptions | RelationOptions) {
  const decorators: PropertyDecorator[] = [];
  const push = (decorator: PropertyDecorator) => decorators.push(decorator);

  const fo: ValidationOptions = { each: o?.isArray };

  if (o?.required) {
    decorators.push(IsNotEmpty());
  } else {
    decorators.push(IsOptional());
  }

  if (o?.type === 'string') {
    if (o.minLength) push(MinLength(o.minLength, fo));
    if (o.maxLength) push(MaxLength(o.maxLength, fo));
    if (o.format === 'email') push(IsEmail({}, fo));
    if (o.format === 'password') push(IsStrongPassword({}, fo));
  }

  if (o?.type === 'number') {
    if (o.minimum) push(Min(o.minimum, fo));
    if (o.maximum) push(Max(o.maximum, fo));
  }

  return propertyDecorators(...decorators);
}
