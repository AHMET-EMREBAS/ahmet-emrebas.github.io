import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './CreateTagDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateTagDto extends PartialType(CreateTagDto) {}
