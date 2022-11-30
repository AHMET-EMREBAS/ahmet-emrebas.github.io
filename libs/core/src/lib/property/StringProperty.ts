import { PropertyOptions } from '../types';
import { Property } from './Property';

export type StringPropertyOptions = Pick<
  PropertyOptions<string>,
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'ean'
  | 'uuid'
  | 'email'
  | 'password'
  | 'default'
  | 'enum'
>;

export function StringProperty(options: StringPropertyOptions) {
  return Property<string>({ type: 'string', inputType: 'text', ...options });
}
