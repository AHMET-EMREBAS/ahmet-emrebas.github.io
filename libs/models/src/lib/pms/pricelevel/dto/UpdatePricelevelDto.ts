import { PartialType } from '@nestjs/swagger';
import { CreatePricelevelDto } from './CreatePricelevelDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdatePricelevelDto extends PartialType(CreatePricelevelDto) {}
