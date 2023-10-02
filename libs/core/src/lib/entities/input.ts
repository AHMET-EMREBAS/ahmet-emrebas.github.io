import { InputTypeOptions, InputType as _InputType } from '@nestjs/graphql';
import { classDecorators } from '@techbir/utils';
import { Expose } from 'class-transformer';

export function Input(options: InputTypeOptions = {}) {
  return classDecorators(_InputType(options), Expose());
}
