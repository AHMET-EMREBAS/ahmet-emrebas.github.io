import { Transform } from 'class-transformer';
import {
  isBooleanString,
  isDateString,
  isNumberString,
  isString,
} from 'class-validator';
import { ILike } from 'typeorm';

export function StringNumberTransformer(defaultValue?: number) {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      return parseFloat(value);
    }
    return defaultValue;
  });
}

export function StringIntegerTransformer(defaultValue?: number) {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      return parseInt(value);
    }
    return defaultValue;
  });
}

export function StringBooleanTransformer(defaultValue?: boolean) {
  return Transform(({ value }) => {
    if (isBooleanString(value)) {
      return value === 'true' ? true : false;
    }
    return defaultValue;
  });
}

export function StringDateTransformer(defautlValue?: Date) {
  return Transform(({ value }) => {
    if (isDateString(value)) {
      return new Date(value);
    }
    return defautlValue;
  });
}

export function WhereQueryTransformer(keys: string[]) {
  return Transform(({ value }) => {
    if (isString(value)) {
      return keys.map((e) => ({
        [e]: ILike(`%${value}%`),
      }));
    }
    return {};
  });
}
