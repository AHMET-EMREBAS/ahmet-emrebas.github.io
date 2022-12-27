import { applyDecorators } from '@nestjs/common';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IDDto } from '../orm';

export function ManyToOneProperty() {
  return applyDecorators(
    ValidateNested(),
    Type(() => IDDto)
  );
}

export function OneToOneProperty() {
  return ManyToOneProperty();
}

export function ManyToManyProperty() {
  return applyDecorators(
    ValidateNested({ each: true }),
    Type(() => IDDto)
  );
}

export function OneToManyProperty() {
  return ManyToManyProperty();
}
