/** Generated by @techbir/gen:entity */

import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreateGroupDto } from './create-group.dto';

@Dto()
export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
