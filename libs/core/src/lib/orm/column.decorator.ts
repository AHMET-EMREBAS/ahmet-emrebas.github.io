import { applyDecorators } from '@nestjs/common';
import { Column as C, ColumnOptions } from 'typeorm';

export function Column(options: ColumnOptions) {
  return applyDecorators(C(options));
}
