import { PropertyOptions } from '../types';
import { Property } from './Property';

export type StringPropertyOptions = Pick<
  PropertyOptions,
  'required' | 'minLength' | 'maxLength'
>;

export function StringProperty(options: StringPropertyOptions) {
  return Property({ type: 'string', inputType: 'text', ...options });
}
