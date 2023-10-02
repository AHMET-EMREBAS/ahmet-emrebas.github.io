import { Transform } from 'class-transformer';
import { isJSON } from 'class-validator';

export function ParseJSONTransformer(defaultValue?: Record<string, any>) {
  return Transform(({ value }) => {
    if (isJSON(value)) {
      return JSON.parse(value);
    }
    return defaultValue;
  });
}
