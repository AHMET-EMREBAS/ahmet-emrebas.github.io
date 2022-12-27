import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  Param,
} from '@nestjs/common';
import {
  Get as __Get,
  Post as __Post,
  Put as __Put,
  Delete as __Delete,
  Controller as __Controller,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ClassConstructor } from '../types';
import { Request } from 'express';

export function Controller(appname: string, entity: ClassConstructor<unknown>) {
  const RESOUCE_PATH = entity.name.toLowerCase();
  return applyDecorators(
    ApiTags(`${appname} | ${RESOUCE_PATH}`),
    __Controller(RESOUCE_PATH)
  );
}

export function Get() {
  return applyDecorators(__Get());
}

export function GetById() {
  return applyDecorators(__Get(':id'));
}

export function Post(entity: ClassConstructor<unknown>) {
  return applyDecorators(ApiBody({ type: entity }), __Post());
}

export function UpdateById(entity: ClassConstructor<unknown>) {
  return applyDecorators(ApiBody({ type: entity }), __Put(':id'));
}

export function DeleteById(entity: ClassConstructor<unknown>) {
  return applyDecorators(ApiBody({ type: entity }), __Delete(':id'));
}

export function SetRelation() {
  return applyDecorators(__Post(':id/:rname/:rid'));
}

export function UnsetRelation() {
  return applyDecorators(__Delete(':id/:rname'));
}

export function AddRelation() {
  return applyDecorators(__Put(':id/:rname/:rid'));
}

export function RemoveRelation() {
  return applyDecorators(__Delete(':id/:rname/:rid'));
}

export function ParamId() {
  return Param('id');
}

export function ParamRid() {
  return Param('rid');
}

export function ParamRname() {
  return Param('rname');
}

export function UserId() {
  return createParamDecorator(
    (__: unknown, context: ExecutionContext) =>
      context.switchToHttp().getRequest<Request & { user: { id: number } }>()
        ?.user?.id
  );
}
