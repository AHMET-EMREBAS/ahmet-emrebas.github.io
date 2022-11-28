import { PropertyOptions } from '../types';
import { Property } from './Property';

export type PasswordPropertyOptions = Pick<PropertyOptions, 'required'>;

/**
 * Password propety decorator
 * @param options
 * @returns
 */
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
