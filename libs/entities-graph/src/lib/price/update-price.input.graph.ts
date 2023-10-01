import { CreatePriceInput } from './create-price.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdatePriceInput extends PartialType(CreatePriceInput) {}
