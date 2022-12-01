import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './CreateCategoryDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
