import { ClassConstructor } from '@techbir/utils';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validateFormDto(target: ClassConstructor<any>, value: any) {
  const transformed = plainToInstance(target, value);
  const errors = validateSync(transformed);
  if (errors?.length > 0) {
    const error = errors[0];
    return { [error.property]: Object.values(error.constraints || {})[0] };
  }
  return undefined;
}
