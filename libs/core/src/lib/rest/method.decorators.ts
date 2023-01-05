import {
  applyDecorators,
  Body,
  Controller,
  createParamDecorator,
  Delete,
  ExecutionContext,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { CreateValidationPipe, UpdateValidationPipe } from '../validators';

export function ResourceController(): ClassDecorator {
  return function (target: any) {
    const name = target.name;
    const cpath = name
      .replace('ViewController', '')
      .replace('Controller', '')
      .toLowerCase();
    ApiTags(name)(target);
    Controller(cpath)(target);
  };
}

export function GetAll() {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Get()
  );
}

export function GetOneById() {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Get(':id')
  );
}

export function PostOne() {
  return applyDecorators(
    ApiCreatedResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnprocessableEntityResponse(),
    ApiUnauthorizedResponse(),
    Post()
  );
}

export function UpdateOne() {
  return applyDecorators(
    ApiCreatedResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnprocessableEntityResponse(),
    ApiUnauthorizedResponse(),
    Put()
  );
}

export function DeleteOne() {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Delete(':id')
  );
}

export function SetRelation(relation: string) {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Post(`:id/${relation}/:rid`)
  );
}

export function UnsetRelation(relation: string) {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Delete(`:id/${relation}`)
  );
}

export function AddRelation(relation: string) {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Post(`:id/${relation}/:rid`)
  );
}
export function RemoveRelation(relation: string) {
  return applyDecorators(
    ApiOkResponse(),
    ApiInternalServerErrorResponse(),
    ApiUnauthorizedResponse(),
    Delete(`:id/${relation}/:rid`)
  );
}

export function ParamId() {
  return Param('id', ParseIntPipe);
}

export function RelationId() {
  return Param('rid', ParseIntPipe);
}

export function QueryObject() {
  return Query(UpdateValidationPipe());
}

export function PostBody() {
  return Body(CreateValidationPipe());
}
export function UpdateBody() {
  return Body(UpdateValidationPipe());
}

export function UserIdParam() {
  return createParamDecorator((data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user.sub;
  });
}
