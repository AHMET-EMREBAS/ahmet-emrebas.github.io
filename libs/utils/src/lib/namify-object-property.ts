const isObject = (o: any) => typeof o === 'object';
const isArray = (o: any) => !!o.push && !!o.pop;

/**
 * Convert each object into array and name each item with the object key.
 * @param obj
 * @param objProperties
 * @returns
 */
export function namifyObjectByProperty(
  obj: Record<string, Record<string, any>>,
  ...objProperties: string[]
) {
  for (const [key, value] of Object.entries(obj)) {
    if (objProperties.includes(key)) {
      if (isObject(value)) {
        if (isArray(value)) {
          for (const o of (obj as any)[key]) {
            namifyObjectByProperty(o, ...objProperties);
          }
        } else {
          obj[key] = Object.entries(value).map(([key, value]) => ({
            name: key,
            ...value,
          }));
        }

        for (const o of (obj as any)[key]) {
          namifyObjectByProperty(o, ...objProperties);
        }
      }
    }
  }
  return obj;
}
