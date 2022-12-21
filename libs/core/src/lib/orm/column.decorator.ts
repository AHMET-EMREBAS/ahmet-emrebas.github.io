import { applyDecorators } from '@nestjs/common';
import { Column as C, ColumnOptions } from 'typeorm';
import { v4 } from 'uuid';
export function Column(options: ColumnOptions) {
  return applyDecorators(C(options));
}

type ColumnMetaOptions = Partial<{
  unique: boolean;
  nullable: boolean;
}>;

export const StringColumn = (options: ColumnMetaOptions) =>
  Column({
    type: 'text',
    nullable: options.nullable === true,
    unique: options.unique === true,
  });

export const NumberColumn = (options: ColumnMetaOptions) =>
  Column({
    type: 'numeric',
    nullable: options.nullable === true,
    unique: options.unique === true,
  });

export const IntegerColumn = (options: ColumnMetaOptions) =>
  Column({
    type: 'int',
    nullable: options.nullable === true,
    unique: options.unique === true,
  });

export const DateColumn = (options: Omit<ColumnMetaOptions, 'unique'>) =>
  Column({
    type: 'date',
    nullable: options.nullable === true,
  });

export const BooleanColumn = () =>
  Column({
    type: 'boolean',
    nullable: true,
    default: false,
  });

export const UUIDColumn = () =>
  Column({
    type: 'text',
    nullable: true,
    unique: true,
    transformer: {
      to: (value: string) => v4(),
      from: (value: string) => value,
    },
  });
