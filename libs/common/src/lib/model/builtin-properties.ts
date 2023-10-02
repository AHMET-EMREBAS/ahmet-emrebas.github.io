import { NumberProperty, RelationOptions, StringProperty } from './model';

export function UniqueNameProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'name',
    type: 'string',
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
    ...options,
  };
}

export function UsernameProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'username',
    type: 'string',
    format: 'email',
    unique: true,
    required: true,
    ...options,
  };
}

export function PasswordProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'password',
    type: 'string',
    format: 'password',
    required: true,
    ...options,
  };
}

export function DescriptionProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    name: 'description',
    type: 'string',
    minLength: 3,
    maxLength: 400,
    ...options,
  };
}

export function UpcProperty(options?: Partial<StringProperty>): StringProperty {
  return {
    name: 'upc',
    type: 'string',
    minLength: 11,
    maxLength: 13,
    ...options,
  };
}


export function PriceProperty(
  options?: Partial<NumberProperty>
): NumberProperty {
  return {
    name: 'price',
    type: 'number',
    defaultValue: 0,
    minimum: 0,
    maximum: Number.MAX_SAFE_INTEGER,
    ...options,
  };
}
