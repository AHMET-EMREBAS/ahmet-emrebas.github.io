export const ColumnTypeMap = {
  'text-sm': 'text',
  'text-md': 'text',
  'text-lg': 'text',
  phone: 'text',
  password: 'text',
  email: 'text',
  barcode: 'text',
  uuid: 'text',
  uri: 'text',

  number: 'numeric',
  'number-positive': 'numeric',
  'number-negative': 'numeric',
  integer: 'integer',
  'integer-positive': 'integer',
  'integer-negative': 'integer',

  boolean: 'boolean',

  datetime: 'date',
  date: 'date',
  time: 'date',
};

export function parseColumnType(type: string) {
  return ColumnTypeMap[type];
}
