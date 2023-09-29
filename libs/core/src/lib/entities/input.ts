import { InputType as _InputType } from '@nestjs/graphql';
import { classDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Input() {
  return classDecorators(_InputType(), Expose());
}
