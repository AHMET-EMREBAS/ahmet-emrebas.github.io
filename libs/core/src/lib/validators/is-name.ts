import { applyDecorators } from '@nestjs/common';
import { IsString, MaxLength, MinLength } from 'class-validator';

export function IsName() {
  return applyDecorators(IsString(), MinLength(2), MaxLength(30));
}
