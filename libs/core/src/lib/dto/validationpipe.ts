import { ValidationPipe as VP } from '@nestjs/common';
import { ClassConstructor } from '@techbir/utils';

export function ValidationPipe(expectedType?: ClassConstructor<any>) {
  return new VP({
    expectedType: expectedType,
    transform: true,
    transformOptions: {
      excludeExtraneousValues: true,
    },
    validationError: {
      target: false,
      value: false,
    },
  });
}
