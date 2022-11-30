import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './CreateCategoryDto';
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
