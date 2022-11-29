import { PropertyOptions } from '../types';
import { Property } from './Property';

export type EmailPropertyOptions = Pick<
  PropertyOptions<string>,
  'required' | 'default'
>;

export function EmailProperty(options: EmailPropertyOptions) {
  return Property<string>({
    type: 'string',
    inputType: 'email',
    email: true,
    ...options,
  });
}
