import { PartialType } from '@nestjs/swagger';
import { CreatePermissionDto } from './CreatePermissionDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {}
