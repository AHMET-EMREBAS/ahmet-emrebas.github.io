import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields, StringProperty } from './StringProperty';

export type PasswordPropertyOptions = Pick<
  PropertyOptions<string>,
  CommonFields
>;

/**
 * Password propety decorator
 * @param options
 * @returns
 */
export function PasswordProperty(options: PasswordPropertyOptions) {
  return StringProperty({
    inputType: 'password',
    password: true,
    minLength: 6,
    maxLength: 50,
    ...options,
  });
}
