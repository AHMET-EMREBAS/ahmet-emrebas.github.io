import { CreateProductInput } from './create-product.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
