/**
 * Parse yaml object referances $ref
 * @param mainObject
 * @param subObject
 */
export function parseYamlObject(
  mainObject: Record<string, any>,
  subObject?: Record<string, any>
) {
  function extractRef(obj: Record<string, any>) {
    if (obj['$ref'] && typeof obj['$ref'] === 'string') {
      const r = obj?.['$ref']?.split('/').slice(1);

      let value: Record<string, any> | null = null;

      r.forEach((e) => (value ? (value = value[e]) : (value = mainObject[e])));
      delete obj['$ref'];
      Object.assign(obj, value);
      if (obj['$ref']) {
        extractRef(obj);
      }
    }
  }

  for (const [key, value] of Object.entries(subObject || mainObject)) {
    extractRef(value);
    if (typeof value === 'object') {
      parseYamlObject(mainObject, value);
    }
  }

  return mainObject;
}
