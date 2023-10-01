import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreateCategoryDto } from './create-category.dto';

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
