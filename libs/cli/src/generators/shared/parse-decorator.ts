export const PropertyDecoratorMap = {
  'text-sm': 'TextSmProperty',
  'text-md': 'TextMdProperty',
  'text-lg': 'TextLgProperty',
  phone: 'PhoneProperty',
  password: 'PasswordProperty',
  email: 'EmailProperty',
  barcode: 'BarcodeProperty',
  uuid: 'UuidProperty',
  uri: 'UriProperty',

  number: 'NumberProperty',
  'number-positive': 'PositiveNumberProperty',
  'number-negative': 'NegativeNumberProperty',
  integer: 'IntegerProperty',
  'integer-positive': 'PositiveIntegerProperty',
  'integer-negative': 'NegativeIntegerProperty',

  boolean: 'BooleanProperty',

  datetime: 'DateProperty',
  date: 'DateProperty',
  time: 'DateProperty',
};

export function parsePropertyDecorator(type: string) {
  return PropertyDecoratorMap[type];
}
