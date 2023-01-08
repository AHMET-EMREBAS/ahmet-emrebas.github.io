import { Column as C, ColumnOptions as CO } from 'typeorm';

export function Column(options: CO) {
  return C(options);
}
