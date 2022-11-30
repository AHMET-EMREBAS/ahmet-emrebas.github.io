import {
  createParamDecorator,
  ExecutionContext,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

export function ParamId() {
  return Param('id', ParseIntPipe);
}

export function ParamRid() {
  return Param('rid', ParseIntPipe);
}

export const UserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user.id;
  }
);
