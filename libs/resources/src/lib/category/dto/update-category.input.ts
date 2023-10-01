import { PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.input';
import { Input } from '@techbir/core';

@Input()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {}
