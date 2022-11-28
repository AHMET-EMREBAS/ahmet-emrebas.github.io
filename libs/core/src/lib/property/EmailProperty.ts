import { PropertyOptions } from '../types';
import { Property } from './Property';

export type EmailPropertyOptions = Pick<PropertyOptions, 'required'>;

export function EmailProperty(options: EmailPropertyOptions) {
  return Property({
    type: 'string',
    inputType: 'email',
    email: true,
    ...options,
  });
}
