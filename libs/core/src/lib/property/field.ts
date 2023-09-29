import { FieldOptions, Field as _Field, Int } from '@nestjs/graphql';
import { SchemaObject, Validations } from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Field(o?: SchemaObject) {
  const ds: PropertyDecorator[] = [Expose(), Validations(o)];

  if (!o) return propertyDecorators(...ds);

  const fo: FieldOptions = { nullable: o?.nullable === true };

  if (o.type === 'string') ds.push(_Field(() => String, fo));
  if (o.type === 'number') ds.push(_Field(() => Number, fo));
  if (o.type === 'integer') ds.push(_Field(() => Int, fo));
  if (o.type === 'date') ds.push(_Field(() => Date, fo));
  if (o.type === 'boolean') ds.push(_Field(() => Boolean, fo));

  return propertyDecorators(...ds);
}
