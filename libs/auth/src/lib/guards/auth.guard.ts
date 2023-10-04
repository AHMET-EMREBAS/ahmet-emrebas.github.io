import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BaseGuard } from './base.guard';

@Injectable()
export class AuthGuard extends BaseGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) {
      return true;
    }

    return this.verifyTokenAndSetUser(context);
  }
}
