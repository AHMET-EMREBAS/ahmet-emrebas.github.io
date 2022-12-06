import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { ILike } from 'typeorm';
import { SampleService } from '../sample.service';

@ValidatorConstraint({ name: 'isUnique', async: true })
@Injectable()
export class SampleUniqueValidatorService
  implements ValidatorConstraintInterface
{
  static service: SampleService;
  constructor(sampleService: SampleService) {
    if (sampleService) {
      SampleUniqueValidatorService.service = sampleService;
    }
  }

  async validate(value: any, args: ValidationArguments) {
    const found = await SampleUniqueValidatorService.service.findOneBy({
      [args.property]: ILike(`%${value}%`),
    });
    if (found) {
      return false;
    }
    return true;
  }
}

export function IsUniqueSample() {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${propertyName} must be unique and not a substring of the existing items!`,
      },
      validator: SampleUniqueValidatorService,
    });
  };
}
