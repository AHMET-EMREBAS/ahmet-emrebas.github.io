import { Transform } from 'class-transformer';
import { isNumber, isNumberString } from 'class-validator';

export function ParseNumberTransformer(
  defaultValue?: number
): PropertyDecorator {
  return Transform(({ value }) => {
    if (isNumber(value)) {
      return value;
    }

    if (isNumberString(value)) {
      return parseFloat(value);
    }
    return defaultValue;
  });
}
