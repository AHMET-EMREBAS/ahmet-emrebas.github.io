import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ClassConstructor } from 'class-transformer';
import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields } from './StringProperty';

export type ManyToOnePropertyOptions = Pick<
  PropertyOptions<string>,
  CommonFields
>;

export function ManyToOneProperty<T = unknown>(
  obj: ClassConstructor<T>,
  options?: ManyToOnePropertyOptions
) {
  return applyDecorators(
    Field(() => obj, { nullable: options.required === false ? true : false }),
    Property<string>({
      type: 'object',
      inputType: 'search-one',
      ...options,
    })
  );
}

export function OneToOneProperty<T = unknown>(
  obj: ClassConstructor<T>,
  options?: ManyToOnePropertyOptions
) {
  return ManyToOneProperty<T>(obj, options);
}
