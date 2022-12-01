import { PartialType } from '@nestjs/swagger';
import { CreatePermissionDto } from './CreatePermissionDto';
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
