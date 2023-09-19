export function isIn<T = string>(value: T, list: T[]): T | undefined {
  if (list.includes(value)) {
    return value;
  }
  return undefined;
}
