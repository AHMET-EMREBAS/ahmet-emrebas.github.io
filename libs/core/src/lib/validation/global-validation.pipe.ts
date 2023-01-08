import { ValidationPipe } from '@nestjs/common';

export const GlobalValidationPipe = new ValidationPipe({
  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,
  },
  validationError: { target: false, value: false },
});
