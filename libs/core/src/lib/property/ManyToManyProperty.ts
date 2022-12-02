import { applyDecorators } from '@nestjs/common';
import { Field } from '@nestjs/graphql';
import { ClassConstructor } from 'class-transformer';
import { PropertyOptions } from '../types';
import { Property } from './Property';
import { CommonFields } from './StringProperty';

export type ManyToManyPropertyOptions = Pick<
  PropertyOptions<string>,
  CommonFields
>;

export function ManyToManyProperty<T = unknown>(
  obj: ClassConstructor<T>,
  options?: ManyToManyPropertyOptions
) {
  return applyDecorators(
    Field(() => [obj], { nullable: options.required === false ? true : false }),
    Property<string>({
      type: 'array',
      inputType: 'search-many',
      ...options,
    })
  );
}

export function OneToManyProperty<T = unknown>(
  obj: ClassConstructor<T>,
  options?: ManyToManyPropertyOptions
) {
  return ManyToManyProperty<T>(obj, options);
}
