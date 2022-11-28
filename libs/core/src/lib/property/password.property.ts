import { PropertyOptions } from '../types';
import { Property } from './property';

export type PasswordPropertyOptions = Pick<PropertyOptions, 'required'>;

export function PasswordProperty(options: PasswordPropertyOptions) {
  return Property({
    type: 'string',
    inputType: 'password',
    password: true,
    minLength: 6,
    maxLength: 50,
    ...options,
  });
}
