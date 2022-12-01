import { PropertyOptions } from '../types';
import { Property } from './Property';
import { StringProperty } from './StringProperty';

export type PasswordPropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default'
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
