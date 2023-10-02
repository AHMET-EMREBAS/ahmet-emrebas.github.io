import { ApiPathKeys, ClassConstructor } from '@techbir/utils';
import {
  Param,
  ParseIntPipe,
  Query as RequestQuery,
  Body as RequestBody,
  PipeTransform,
} from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { RelationParam, RelationUnsetParam, ValidationPipe } from '../dto';

/**
 * Id param
 * @returns
 */
export function IdParam() {
  return Param(ApiPathKeys.ID_KEY, ParseIntPipe);
}

/**
 * Token query
 * @returns
 */
export function TokenQuery() {
  return RequestQuery(ApiPathKeys.AUTH_TOKEN);
}

export function TokenArg() {
  return Args('authToken', {
    type: () => String,
    name: 'authToken',
    description: 'Authentication token',
    nullable: true,
  });
}

/**
 * Entire query object
 * @param pipes
 * @returns
 */
export function NestQuery(...pipes: PipeTransform[]) {
  return RequestQuery(...pipes);
}

/**
 * Request body
 * @param pipes
 * @returns
 */
export function Body(...pipes: PipeTransform[]) {
  return RequestBody(...pipes, ValidationPipe());
}

/**
 * GraphQL id Args
 * @returns
 */
export function IdArg() {
  return Args('id', { type: () => Number }, ParseIntPipe);
}

/**
 * GraphQL Args
 * @returns
 */
export function RelationArg() {
  return Args(
    'options',
    { type: () => RelationParam },
    ValidationPipe(RelationParam)
  );
}

/**
 * GraphGL Args
 * @param dto
 * @returns
 */
export function RelationUnsetArg() {
  return Args(
    'options',
    { type: () => RelationUnsetParam },
    ValidationPipe(RelationUnsetParam)
  );
}

/**
 * GraphGL Args
 * @param dto
 * @returns
 */
export function BodyArg(dto: ClassConstructor<any>) {
  return Args('body', { type: () => dto }, ValidationPipe(dto));
}

/**
 * GraphGL Args
 * @param dto
 * @returns
 */
export function QueryArg(dto: ClassConstructor<any>) {
  return Args(
    'query',
    { type: () => dto, nullable: true },
    ValidationPipe(dto)
  );
}
