export function concat(delimeter: string, ...args: (string | undefined)[]) {
  return args
    .map((e) => e?.trim())
    .filter((e) => e && e.length > 0)
    .join(delimeter);
}
