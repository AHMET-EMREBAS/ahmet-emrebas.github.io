import { Transform } from 'class-transformer';
import { isArray, isDate, isNumber, isNumberString } from 'class-validator';
import { isStringObject } from 'util/types';

/**
 * Transform any value from string to actual value.
 */
export const Transformers = {
  string: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }

    return value + '';
  }),
  number: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }

    if (isNumber(value)) {
      return value;
    }

    if (isNumberString(value)) {
      return parseFloat(value);
    }

    return undefined;
  }),

  date: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }
    if (isDate(value)) {
      return new Date(value);
    }
    return undefined;
  }),

  boolean: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }
    if (typeof value === 'boolean') {
      return value;
    }

    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    return undefined;
  }),

  object: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }

    if (typeof value === 'object') {
      return value;
    }
    if (typeof value === 'string') {
      if (isStringObject(value)) {
        return JSON.parse(value);
      }
    }
    return undefined;
  }),

  array: Transform(({ value }) => {
    if (value === undefined || value === 'undefined') {
      return undefined;
    }
    if (isArray(value)) {
      return value;
    }
    if (isStringObject(value)) {
      if (typeof value === 'string') {
        const r = JSON.parse(value);
        if (isArray(r)) {
          return r;
        }
      }
    }
    return undefined;
  }),
};
