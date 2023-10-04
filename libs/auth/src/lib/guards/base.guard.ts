import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { IS_PUBLIC_TOKEN, PERMISSION_TOKEN } from '../auth-metadata';
import { User } from '@techbir/entities';

export class BaseGuard {
  constructor(
    protected readonly authService: AuthService,
    protected readonly reflector: Reflector
  ) {}

  private extractToken(context: ExecutionContext): string | undefined {
    const request = context.switchToHttp().getRequest();

    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  async verifyTokenAndSetUser(context: ExecutionContext) {
    const token = this.extractToken(context);
    if (token) {
      const user = this.authService.verify(token);
      context.switchToHttp().getRequest()['user'] = user;
      return true;
    }
    throw new UnauthorizedException('You do not have a valid session!');
  }

  getUser(context: ExecutionContext) {
    return context.switchToHttp().getRequest()['user'] as User;
  }

  isPublic(context: ExecutionContext) {
    return this.reflector.getAllAndOverride(IS_PUBLIC_TOKEN, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  requiredPermission(context: ExecutionContext) {
    return this.reflector.getAllAndOverride(PERMISSION_TOKEN, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  userHasPermission(context: ExecutionContext) {
    const rPermission = this.requiredPermission(context);
    const user = this.getUser(context);
    if (user) {
      if (user.roles) {
        for (const role of user.roles) {
          if (role.permissions) {
            for (const permission of role.permissions) {
              if (rPermission === permission.name) {
                return true;
              }
            }
          }
        }
      }
    }

    throw new UnauthorizedException('You do not have the permisison');
  }
}
