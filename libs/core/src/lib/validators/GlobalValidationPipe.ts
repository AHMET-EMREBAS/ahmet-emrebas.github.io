import { BadRequestException, ValidationPipe } from '@nestjs/common';

export const GlobalValidationPipe = new ValidationPipe({
  exceptionFactory: (errors) => {
    const errorResponse = {};
    errors.forEach((e) => {
      errorResponse[e.property] = e.constraints;
    });

    throw new BadRequestException(errorResponse);
  },
  validationError: { target: false, value: false },

  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
  },
  forbidUnknownValues: true,
  stopAtFirstError: true,
});
