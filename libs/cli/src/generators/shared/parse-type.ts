export const TypeMap = {
  'text-sm': 'string',
  'text-md': 'string',
  'text-lg': 'string',
  phone: 'string',
  password: 'string',
  email: 'string',
  barcode: 'string',
  uuid: 'string',
  uri: 'string',

  number: 'number',
  'number-positive': 'number',
  'number-negative': 'number',
  integer: 'number',
  'integer-positive': 'number',
  'integer-negative': 'number',

  boolean: 'boolean',

  datetime: 'Date',
  date: 'Date',
  time: 'Date',
};

export function parsePropertyType(type: string) {
  return TypeMap[type];
}
