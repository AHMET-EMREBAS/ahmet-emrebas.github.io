import { Column as __C, ColumnOptions as CO } from 'typeorm';

export function Column(options: CO) {
  return __C(options);
}
