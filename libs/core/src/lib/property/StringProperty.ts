import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { PropertyOptions } from '../types';
import { Property } from './Property';

export type CommonFields = 'required' | 'default' | 'description';

export type StringPropertyOptions = Pick<
  PropertyOptions<string>,
  | CommonFields
  | 'minLength'
  | 'maxLength'
  | 'inputType'
  | 'ean'
  | 'uuid'
  | 'email'
  | 'password'
  | 'enum'
>;

export function StringProperty(options: StringPropertyOptions) {
  return applyDecorators(
    Property<string>({
      type: 'string',
      inputType: options.inputType || 'text',
      ...options,
    }),
    Field(() => String, { nullable: options.required === false ? true : false })
  );
}
