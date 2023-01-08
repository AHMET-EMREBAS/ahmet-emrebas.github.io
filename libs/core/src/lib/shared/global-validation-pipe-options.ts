import { ValidationPipeOptions } from '@nestjs/common';
import { GLOBAL_TRANSFORM_OPTIONS } from './global-transform-options';

export const GLOBAL_VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  transform: true,
  transformOptions: GLOBAL_TRANSFORM_OPTIONS,
  validationError: { target: false, value: false },
};
