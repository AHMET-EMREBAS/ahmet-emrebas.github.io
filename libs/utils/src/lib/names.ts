/**
 * Convert className like ClassName to Class_Name
 * @param className
 * @returns
 */
export function splitByUppercase(className: string) {
  const result = [className[0]];
  const asList = className.split('').slice(1);

  for (const v of asList) {
    if (v.charCodeAt(0) <= 90 && v.charCodeAt(0) >= 65) {
      result.push('_');
    }
    result.push(v);
  }
  return result.join('');
}

function uppercaseFirst(name: string) {
  return [name[0].toUpperCase(), name.slice(1)].join('');
}

function lowercaseFirst(name: string) {
  return [name[0].toLowerCase(), name.slice(1)].join('');
}

function __className(name: string) {
  return name
    .split('-')
    .map((e) => uppercaseFirst(e))
    .join('');
}

function __propertyName(name: string) {
  return lowercaseFirst(
    name
      .split('-')
      .map((e) => uppercaseFirst(e))
      .join('')
  );
}

function __constName(name: string) {
  return splitByUppercase(name)
    .split('_')
    .map((e) => e.toUpperCase())
    .join('_')
    .split('-')
    .join('_');
}

function __fileName(name: string) {
  return splitByUppercase(name)
    .split('_')
    .map((e) => e.toLowerCase())
    .join('-');
}

export function names(name: string) {
  return {
    className: __className(name),
    fileName: __fileName(name),
    propertyName: __propertyName(name),
    constName: __constName(name),
  };
}
