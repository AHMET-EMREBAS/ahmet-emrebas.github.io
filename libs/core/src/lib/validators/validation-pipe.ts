import {
  UnprocessableEntityException,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';

const commonOptions: ValidationPipeOptions = {
  transform: true,
  transformOptions: {
    excludeExtraneousValues: true,
    exposeUnsetFields: false,
    exposeDefaultValues: false,
  },
  exceptionFactory(errors) {
    throw new UnprocessableEntityException(errors);
  },
};

export function CreateValidationPipe() {
  return new ValidationPipe({
    ...commonOptions,
  });
}

export function UpdateValidationPipe() {
  return new ValidationPipe({
    ...commonOptions,
    skipMissingProperties: true,
    skipNullProperties: true,
    skipUndefinedProperties: true,
  });
}
