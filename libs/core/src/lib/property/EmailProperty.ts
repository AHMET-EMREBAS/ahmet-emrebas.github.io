import { PropertyOptions } from '../types';
import { Property } from './Property';
import { StringProperty } from './StringProperty';

export type EmailPropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default'
>;

export function EmailProperty(options: EmailPropertyOptions) {
  return StringProperty({
    inputType: 'email',
    email: true,
    ...options,
  });
}
