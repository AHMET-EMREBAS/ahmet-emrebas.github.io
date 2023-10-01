import { Expose, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';

import { propertyDecorators } from '@techbir/utils';
import { Constructor, PropertyOptions } from '../types';

export function Validations(o?: PropertyOptions) {
  const ds: PropertyDecorator[] = [Expose()];

  const vo: ValidationOptions = { each: o?.isArray };

  if (!o) {
    return propertyDecorators(...ds);
  }
  if (o.nullable === true) ds.push(IsOptional(vo));

  if (o.type === 'string') ds.push(IsString(vo));
  if (o.type === 'number') ds.push(IsNumber({}, vo));
  if (o.type === 'integer') ds.push(IsInt(vo));
  if (o.type === 'boolean') ds.push(IsBoolean(vo));
  if (o.type === 'date') ds.push(IsDate(vo));

  if (o.type === 'object') {
    ds.push(IsObject(vo));
    ds.push(ValidateNested(vo));
    if (o.target) ds.push(Type(() => o.target as Constructor<any>));
  }
  if (o.type === 'string') {
    if (o.minLength) ds.push(MinLength(o.minLength, vo));
    if (o.maxLength) ds.push(MaxLength(o.maxLength, vo));
    if (o.stringFormat === 'email') ds.push(IsEmail({}, vo));
    if (o.stringFormat === 'password') ds.push(IsStrongPassword({}, vo));
  }
  if (o.selectOptions) ds.push(IsIn(o.selectOptions));

  if (o.type === 'number') {
    if (o.minimum) ds.push(Min(o.minimum, vo));
    if (o.maximum) ds.push(Max(o.maximum, vo));
  }

  return propertyDecorators(...ds);
}
