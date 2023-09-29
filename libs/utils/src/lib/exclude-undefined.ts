/**
 * Exclude undefined values from record.
 * @param obj Record
 * @returns
 */
export function excludeUndefined(obj: Record<any, any>) {
  return Object.entries(obj)
    .filter(([, value]) => value != undefined)
    .map(([key, value]) => ({ [key]: value }))
    .reduce((p, c) => ({ ...p, ...c }));
}
