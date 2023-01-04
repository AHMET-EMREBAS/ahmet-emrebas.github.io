import { CreateCategoryDto } from './create-category.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
