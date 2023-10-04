import { PropertyOptions, Validations } from '@techbir/common';
import { propertyDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';
import { Column as _Column, ColumnOptions as _ColumnOptions } from 'typeorm';
import { HashPasswordTransformer } from '../transformer';

export type ColumnOptions = Omit<_ColumnOptions, 'type'> & {
  type: 'string' | 'number' | 'boolean' | 'date';
};
export function Column(options?: PropertyOptions) {
  let type: _ColumnOptions['type'] = 'varchar';

  if (options?.type === 'string') type = 'varchar';
  if (options?.type === 'number') type = 'numeric';
  if (options?.type === 'boolean') type = 'boolean';
  if (options?.type === 'Date') type = 'date';

  const TRANSFORMERS = [];

  if (options?.hash) {
    TRANSFORMERS.push(HashPasswordTransformer());
  }
  return propertyDecorators(
    Validations(options),
    Expose(),
    _Column({
      ...options,
      type,
      default: options?.defaultValue,
      nullable: options?.required !== true,
      transformer: TRANSFORMERS,
    })
  );
}
