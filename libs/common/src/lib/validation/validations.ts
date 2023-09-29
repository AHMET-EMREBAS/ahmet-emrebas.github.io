import { Expose } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { propertyDecorators } from '@techbir/utils';
import { SchemaObject } from '../types';

export function Validations(o?: SchemaObject) {
  const ds: PropertyDecorator[] = [Expose()];

  if (!o) {
    return propertyDecorators(...ds);
  }
  if (o.nullable === true) ds.push(IsOptional());

  if (o.type === 'string') ds.push(IsString());
  if (o.type === 'number') ds.push(IsNumber());
  if (o.type === 'integer') ds.push(IsInt());
  if (o.type === 'boolean') ds.push(IsBoolean());
  if (o.type === 'date') ds.push(IsDate());

  if (o.minLength) ds.push(MinLength(o.minLength));
  if (o.maxLength) ds.push(MaxLength(o.maxLength));
  if (o.minimum) ds.push(Min(o.minimum));
  if (o.maximum) ds.push(Max(o.maximum));
  if (o.enum) ds.push(IsIn(o.enum as string[]));
  if (o.format === 'email') ds.push(IsEmail());
  if (o.format === 'password') ds.push(IsStrongPassword());

  return propertyDecorators(...ds);
}
