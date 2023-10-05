import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BaseGuard } from './base.guard';
import { AuthService } from '../auth.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard extends BaseGuard implements CanActivate {
  constructor(authService: AuthService, reflector: Reflector) {
    super(authService, reflector);
  }
  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) {
      return true;
    }
    await this.verifyTokenAndSetUser(context);

    if (this.isAdmin(context)) {
      return true;
    }
    
    if (this.requiredPermission(context)) {
      if (this.userHasPermission(context)) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }
}
