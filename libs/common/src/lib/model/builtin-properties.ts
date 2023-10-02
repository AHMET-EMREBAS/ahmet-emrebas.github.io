import { NumberProperty, StringProperty } from './model';

export function UniqueNameProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    autocomplete: 'off',
    icon: 'info',
    inputType: 'text',
    label: 'Name',
    maxLength: 30,
    minLength: 3,
    name: 'name',
    required: true,
    type: 'string',
    unique: true,
    ...options,
  };
}

export function UsernameProperty(
  options?: Partial<StringProperty>
): StringProperty {
  return {
    autocomplete: 'username',
    format: 'email',
    icon: 'person',
    inputType: 'text',
    label: 'Username',
    name: 'username',
    required: true,
    type: 'string',
    unique: true,
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
    autocomplete: 'current-password',
    inputType: 'password',
    icon: 'password',
    label: 'Password',
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
    inputType: 'textarea',
    autocomplete: 'off',
    icon: 'description',
    label: 'Description',
    ...options,
  };
}

export function UpcProperty(options?: Partial<StringProperty>): StringProperty {
  return {
    name: 'upc',
    type: 'string',
    minLength: 11,
    maxLength: 13,
    inputType: 'text',
    autocomplete: 'off',
    icon: 'qr_code',
    label: 'Upc',
    ...options,
  };
}

export function PriceProperty(
  options?: Partial<NumberProperty>
): NumberProperty {
  return {
    defaultValue: 0,
    icon: 'attach_money',
    inputType: 'number',
    label: 'Price',
    maximum: Number.MAX_SAFE_INTEGER,
    minimum: 0,
    name: 'price',
    type: 'number',
    ...options,
  };
}
