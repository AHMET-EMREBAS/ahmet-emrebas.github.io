import {
  createParamDecorator,
  ExecutionContext,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
export function ParamId() {
  return Param('id', ParseIntPipe);
}

export function ArgId() {
  return Args('id', { description: 'Entity id', type: () => Int });
}

export function ParamRid() {
  return Param('rid', ParseIntPipe);
}

export function ArgRid() {
  return Args('rid', { description: 'Relation id', type: () => Int });
}

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user.id;
  }
);
