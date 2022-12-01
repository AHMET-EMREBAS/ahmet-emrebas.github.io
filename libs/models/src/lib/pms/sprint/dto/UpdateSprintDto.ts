import { PartialType } from '@nestjs/swagger';
import { CreateSprintDto } from './CreateSprintDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateSprintDto extends PartialType(CreateSprintDto) {}
