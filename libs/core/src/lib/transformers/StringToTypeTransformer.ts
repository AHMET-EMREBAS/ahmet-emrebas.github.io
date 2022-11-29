import { Transform } from 'class-transformer';
import { isDateString, isNumberString } from 'class-validator';

/**
 * Transform string of number, date, and boolean into their own type.
 * @param type
 * @returns
 */
export function StringToTypeTransformer(type: string) {
  return Transform(({ value }) => {
    if (type === 'boolean') {
      if (value === 'true') {
        return true;
      }

      if (value === 'false') {
        return false;
      }

      return undefined;
    }

    if (type === 'number') {
      if (isNumberString(value)) {
        const v = parseFloat(value);
        if (!isNaN(v)) {
          return v;
        }
      }
      return undefined;
    }

    if (type === 'date') {
      if (isDateString(value)) {
        return new Date(value);
      }
      return undefined;
    }

    return value;
  });
}
