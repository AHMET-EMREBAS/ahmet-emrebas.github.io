import { Field as _Field } from '@nestjs/graphql';
import { PropertyOptions, RelationOptions, Validations } from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { ClassConstructor, Expose } from 'class-transformer';

export function Field(o?: PropertyOptions | RelationOptions) {

  
  const fieldOptions = {
    defaultValue: o?.defaultValue,
    nullable: o?.required !== true,
  };

  let typeHandler!: () => ClassConstructor<any>;

  if ((o as RelationOptions).target) {
    typeHandler = () => (o as RelationOptions).target;
  } else {
    if (o?.type === 'string') {
      typeHandler = () => String;
    } else if (o?.type === 'number') {
      typeHandler = () => Number;
    } else if (o?.type === 'Date') {
      typeHandler = () => Date;
    } else if (o?.type === 'boolean') {
      typeHandler = () => Boolean;
    } else if (o?.type === 'object') {
      if (o && o.objectType) {
        typeHandler = () => o.objectType as ClassConstructor<any>;
      } else {
        throw new Error(`Object type must be provided for ${o.name} property`);
      }
    }
    throw new Error('Field could not match any type!');
  }

  return propertyDecorators(
    Expose(),
    Validations(o),
    _Field(typeHandler, fieldOptions)
  );
}
