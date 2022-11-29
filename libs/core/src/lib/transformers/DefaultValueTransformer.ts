import { Transform } from 'class-transformer';

function DefaultValueTransformer<T>(getter: (value: T) => T) {
  return Transform(({ value }) => {
    return getter(value);
  });
}

/**
 * If the value is undefined, then return the defaultValue
 * @param defaultValue
 * @returns
 */
export function DefaultStringTransformer(defaultValue: string) {
  return DefaultValueTransformer<string>((value) =>
    typeof value === 'undefined' ? defaultValue : value
  );
}

/**
 * If the value is undefined, then return the defaultValue
 * @param defaultValue
 * @returns
 */
export function DefaultNumberTransformer(defaultValue: number) {
  return DefaultValueTransformer<number>((value) =>
    typeof value === 'undefined' ? defaultValue : value
  );
}

/**
 * If the value is undefined, then return the defaultValue
 * @param defaultValue
 * @returns
 */
export function DefaultBooleanTransformer(defaultValue: boolean) {
  return DefaultValueTransformer<boolean>((value) =>
    typeof value === 'undefined' ? defaultValue : value
  );
}
