import { applyDecorators } from '@nestjs/common';
import { CanRead, CanWrite } from '../auth';
import { Query, Mutation } from '@nestjs/graphql';
import { ClassConstructor } from 'class-transformer';

export function GRead<T = unknown>(obj: ClassConstructor<T>) {
  return applyDecorators(
    CanRead(),
    Query(() => [obj], { description: 'Find items' })
  );
}

export function GReadById<T = unknown>(obj: ClassConstructor<T>) {
  return applyDecorators(
    CanRead(),
    Query(() => obj, { description: 'Find item by id' })
  );
}

/**
 * GraphQL Request
 * Post request for creating item.
 * @returns
 */
export function GWrite(obj: ClassConstructor<any> | [ClassConstructor<any>]) {
  return applyDecorators(
    CanWrite(),
    Mutation(() => obj, { description: 'Save item' })
  );
}

/**
 * GraphQL Request
 * Put request for updating item
 * @returns
 */
export function GUpdate() {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: 'Update item' })
  );
}

/**
 * GraphQL Request
 * Delete request for deleting item
 * @returns
 */
export function GDelete() {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: 'Delete item' })
  );
}

/**
 * GraphQL Request
 * Post request for setting relation.
 * @param relation
 * @returns
 */
export function GSet(relation: string) {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: `Set ${relation}` })
  );
}

/**
 * GraphQL Request
 * Delete request for unsetting item.
 * @param relation
 * @returns
 */
export function GUnset(relation: string) {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: `Unset ${relation}` })
  );
}

/**
 * GraphQL Request
 * Put request for updating many-to-many relationship list
 * @param relation
 * @returns
 */
export function GAdd(relation: string) {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: `Add ${relation}` })
  );
}

/**
 * GraphQL Request
 * Delete request for removing many-to-many relation from list
 * @param relation
 * @returns
 */
export function GRemove(relation: string) {
  return applyDecorators(
    CanWrite(),
    Mutation(() => Boolean, { description: `Remove ${relation}` })
  );
}

export function GAggregate(name: string) {
  return applyDecorators(
    CanRead(),
    Mutation(() => Boolean, { description: name })
  );
}

export function GCount() {
  return GAggregate('count');
}
export function GOptions() {
  return GAggregate('options');
}
