import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './CreateProjectDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
