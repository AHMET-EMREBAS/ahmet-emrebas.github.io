import {
  applyDecorators,
  Get,
  Post,
  Put,
  Delete as DeleteRequest,
  Patch,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CanRead, CanWrite } from '../auth';

function upperFirst(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

export const ReadRequestResponses = applyDecorators(
  ApiOkResponse({ description: 'Success' }),
  ApiInternalServerErrorResponse({ description: 'Not client error' }),
  ApiBadRequestResponse({ description: 'Insufficient parameters.' }),
  ApiUnauthorizedResponse({ description: 'Lack of privileges.' })
);

export function Read() {
  return applyDecorators(
    ApiOperation({ summary: 'Find all items' }),
    ReadRequestResponses,
    Get(),
    CanRead()
  );
}

export function ReadById() {
  return applyDecorators(
    ApiOperation({ summary: 'Find one item by id' }),
    ReadRequestResponses,
    Get(':id'),
    CanRead()
  );
}

/**
 * Post request for creating item.
 * @returns
 */
export function Write() {
  return applyDecorators(
    ApiOperation({ summary: 'Save item' }),
    ReadRequestResponses,
    Post(),
    CanWrite()
  );
}

/**
 * Put request for updating item
 * @returns
 */
export function Update() {
  return applyDecorators(
    ApiOperation({ summary: 'Update item' }),
    ReadRequestResponses,
    Put(':id'),
    CanWrite()
  );
}

/**
 * Delete request for deleting item
 * @returns
 */
export function Delete() {
  return applyDecorators(
    ApiOperation({ summary: 'Delete item' }),
    ReadRequestResponses,
    DeleteRequest(':id'),
    CanWrite()
  );
}

/**
 * Post request for setting relation.
 * @param relation
 * @returns
 */
export function Set(relation: string) {
  return applyDecorators(
    ApiOperation({ summary: `Set ${relation}` }),
    ReadRequestResponses,
    Post(`:id/${relation}/:rid`),
    CanWrite()
  );
}

/**
 * Delete request for unsetting item.
 * @param relation
 * @returns
 */
export function Unset(relation: string) {
  return applyDecorators(
    ApiOperation({ summary: `Unset ${relation}` }),
    ReadRequestResponses,
    DeleteRequest(`:id/${relation}`),
    CanWrite()
  );
}

/**
 * Put request for updating many-to-many relationship list
 * @param relation
 * @returns
 */
export function Add(relation: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Add ${relation}`,
      operationId: `add${upperFirst(relation)}`,
    }),
    ReadRequestResponses,
    Put(`:id/${relation}/:rid`),
    CanWrite()
  );
}

/**
 * Delete request for removing many-to-many relation from list
 * @param relation
 * @returns
 */
export function Remove(relation: string) {
  return applyDecorators(
    ApiOperation({ summary: `Remove ${relation}` }),
    DeleteRequest(`:id/${relation}/:rid`),
    CanWrite()
  );
}

export function Aggregate(name: string) {
  return applyDecorators(
    ApiOperation({ summary: `${name}` }),
    CanRead(),
    Patch(name)
  );
}

export function Count() {
  return Aggregate('count');
}

export function Options() {
  return Aggregate('options');
}
