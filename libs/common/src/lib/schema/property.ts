import { EntitySchemaRelationOptions } from 'typeorm';
import { ColumnOptions } from './column-options';
import { InputType } from './input.type';

export interface Property<T> {
  columnOptions: ColumnOptions;
  inputOptions: InputType<T>;
}
export interface Relation<T> {
  relationOptions: EntitySchemaRelationOptions;
  inputOptions: InputType<T>;
}
