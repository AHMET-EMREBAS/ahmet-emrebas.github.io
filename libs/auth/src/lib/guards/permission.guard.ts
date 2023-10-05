import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BaseGuard } from './base.guard';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class PermissionGuard extends BaseGuard implements CanActivate {
  constructor(authService: AuthService, reflector: Reflector) {
    super(authService, reflector);
  }
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) {
      return true;
    } else {
      if (this.requiredPermission(context)) {
        if (this.userHasPermission(context)) {
          return true;
        }
      } else {
        return true;
      }
    }

    return false;
  }
}
