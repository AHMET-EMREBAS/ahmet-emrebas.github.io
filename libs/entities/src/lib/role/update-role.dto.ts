/** Generated by @techbir/gen:entity */

import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreateRoleDto } from './create-role.dto';

@Dto()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
