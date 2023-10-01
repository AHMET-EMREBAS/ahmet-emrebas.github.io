import { CreateCategoryInput } from './create-category.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {}