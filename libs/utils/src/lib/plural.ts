/**
 * pluralize text
 * @param value string
 * @returns
 */
export function plural(value: string) {
  const lowerName = value.toLowerCase();

  if (lowerName && lowerName.length > 0) {
    const pluralPattern = /^\w+[^euioa]y$/i;

    if (pluralPattern.test(lowerName)) {
      return value.slice(0, -1) + 'ies';
    } else if (lowerName.endsWith('o')) {
      return value + 'es';
    }
    return value + 's';
  }
  throw new Error('Name is undefined!');
}
