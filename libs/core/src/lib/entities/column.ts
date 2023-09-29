import { Column as _Column, ColumnOptions } from 'typeorm';

export function Column(options?: ColumnOptions) {
  return _Column({ ...options });
}
