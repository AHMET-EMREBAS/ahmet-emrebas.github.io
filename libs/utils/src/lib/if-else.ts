/**
 * If true then return the value
 * @param condition
 * @param then
 * @param elsee
 * @returns
 */
export function ifElse<T = any>(
  condition: boolean | undefined,
  then: T,
  elsee?: T
) {
  return condition ? then : elsee;
}

export function defaultValue<T = any>(value: T, defaultValuee: Required<T>) {
  return value ?? defaultValuee;
}
