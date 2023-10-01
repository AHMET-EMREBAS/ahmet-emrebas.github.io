import { PropertyNames } from './property-names';
import { PropertyOptions } from './property-options';

export function NameProperty(): PropertyOptions {
  return {
    type: 'string',
    minLength: 3,
    maxLength: 50,
    icon: 'text_format',
    description: '',
    autocomplete: 'name',
  };
}

export function PasswordProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'password',
    icon: 'password',
  };
}
export function LongTextProperty(): PropertyOptions {
  return {
    type: 'string',
    minLength: 0,
    maxLength: 1000,
    icon: 'description',
  };
}

export function PositiveNumberProperty(): PropertyOptions {
  return {
    type: 'number',
    minimum: 0,
    icon: 'numbers',
  };
}

export function UsernameProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'email',
    icon: 'person',
  };
}
export function CurrencyProperty(): PropertyOptions {
  return {
    type: 'number',
    minimum: 0,
    icon: 'attach_money',
  };
}

export function EmailProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'email',
    icon: 'email',
  };
}

export function UrlProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'url',
    icon: 'link',
  };
}

export function PhoneNumberProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'phone',
    icon: 'phone',
  };
}

export function UPCProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'upc',
    icon: 'qr_code',
  };
}

export function SKUProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'sku',
    icon: 'code',
  };
}

export function DateTimeProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'date',
    icon: 'calendar_month',
  };
}

export function CreditCardNumberProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'creditCard',
    icon: 'credit_card',
  };
}

export function SSNProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'ssn',
    icon: 'perm_identity',
  };
}

export function PostalCodeProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'zip',
    icon: 'my_location',
  };
}

export function IpAddressProperty(): PropertyOptions {
  return {
    type: 'string',
    stringFormat: 'ip',
    icon: 'network_ping',
  };
}

export function CredentialsProperty(): Partial<
  Record<PropertyNames, PropertyOptions>
> {
  return {
    username: UsernameProperty(),
    password: PasswordProperty(),
  };
}

export function NameDescriptionProperty(): Partial<
  Record<PropertyNames, PropertyOptions>
> {
  return {
    name: NameProperty(),
    description: LongTextProperty(),
  };
}
