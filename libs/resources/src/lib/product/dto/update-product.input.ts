import { PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';
import { Input } from '@techbir/core';

@Input()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
