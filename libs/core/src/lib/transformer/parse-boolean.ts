import { Transform } from 'class-transformer';
import { isBooleanString } from 'class-validator';

export function ParseBooleanTransformer(defaultValue?: boolean) {
  return Transform(({ value }) => {
    if (isBooleanString(value)) {
      return value == 'true' ? true : value == 'false' ? false : defaultValue;
    }
    return defaultValue;
  });
}
