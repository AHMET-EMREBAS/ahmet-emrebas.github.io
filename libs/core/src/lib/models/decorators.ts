import { applyDecorators } from '@nestjs/common';
import { Column as TColumn, ColumnOptions, Entity as TEntity } from 'typeorm';
import { ObjectType, InputType } from '@nestjs/graphql';
import { GraphFields } from '../graph';

export function Column(columnOptions: ColumnOptions) {
  const ctype: string = (columnOptions.type || 'text') as string;

  const GField = GraphFields[ctype];
  if (!GField) {
    throw new Error(
      `Graphql field type is not added for the type ${columnOptions.type}`
    );
  }

  return applyDecorators(
    GField({
      nullable: !!columnOptions.nullable,
      defaultValue: columnOptions.default,
    }),
    TColumn(columnOptions)
  );
}

export function Entity() {
  return applyDecorators(ObjectType(), TEntity());
}

export function DTO() {
  return applyDecorators(InputType());
}
