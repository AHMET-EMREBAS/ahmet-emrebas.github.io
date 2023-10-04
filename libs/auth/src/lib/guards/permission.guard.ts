import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { BaseGuard } from './base.guard';

@Injectable()
export class PermissionGuard extends BaseGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isPublic(context)) {
      return true;
    } else {
      if (this.userHasPermission(context)) {
        return true;
      }
      return false;
    }
  }
}
