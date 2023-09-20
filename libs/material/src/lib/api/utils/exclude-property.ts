export function excludeProperty(obj: Record<string, any>, property: string) {
  const newObj = { ...obj };
  delete newObj[property];
  return newObj;
}
