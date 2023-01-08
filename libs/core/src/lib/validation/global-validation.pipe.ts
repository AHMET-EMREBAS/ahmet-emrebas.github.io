import { ValidationPipe } from '@nestjs/common';
import { GLOBAL_VALIDATION_PIPE_OPTIONS } from '../shared';

export const GlobalValidationPipe = new ValidationPipe(
  GLOBAL_VALIDATION_PIPE_OPTIONS
);
