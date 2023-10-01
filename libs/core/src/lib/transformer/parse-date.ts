import { Transform } from 'class-transformer';
import { isDateString } from 'class-validator';

export function ParseDateTransformer(defaultValue?: Date) {
  return Transform(({ value }) => {
    if (isDateString(value)) {
      return new Date(value);
    }
    return defaultValue;
  });
}
