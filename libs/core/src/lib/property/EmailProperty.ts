import { PropertyOptions } from '../types';
import { CommonFields, StringProperty } from './StringProperty';

export type EmailPropertyOptions = Pick<PropertyOptions<string>, CommonFields>;

export function EmailProperty(options: EmailPropertyOptions) {
  return StringProperty({
    inputType: 'email',
    email: true,
    ...options,
  });
}
