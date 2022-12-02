import { applyDecorators } from '@nestjs/common';
import { Field, Float, Int } from '@nestjs/graphql';
import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields } from './StringProperty';

export type NumberPropertyOptions = Pick<
  PropertyOptions<number>,
  CommonFields | 'minimum' | 'maximum' | 'enum'
>;

export function NumberProperty(options: NumberPropertyOptions) {
  return applyDecorators(
    Property<number>({ type: 'number', inputType: 'number', ...options }),
    Field(() => Float, { nullable: options.required === false ? true : false })
  );
}
