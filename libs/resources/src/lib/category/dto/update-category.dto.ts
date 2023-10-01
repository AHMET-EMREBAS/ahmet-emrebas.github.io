import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
