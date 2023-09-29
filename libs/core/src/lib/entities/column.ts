import { Column as _Column, ColumnOptions as _ColumnOptions } from 'typeorm';

export type ColumnOptions = Omit<_ColumnOptions, 'type'> & {
  type: 'string' | 'number' | 'boolean' | 'date';
};
export function Column(options?: ColumnOptions) {
  let type: _ColumnOptions['type'] = 'varchar';

  if (options?.type === 'string') type = 'varchar';
  if (options?.type === 'number') type = 'numeric';
  if (options?.type === 'boolean') type = 'boolean';
  if (options?.type === 'date') type = 'date';

  return _Column({ ...options, type });
}
