import { PartialType } from '@nestjs/graphql';
import { CreatePriceInput } from './create-price.input';
import { Input } from '@techbir/core';

@Input()
export class UpdatePriceInput extends PartialType(CreatePriceInput) {}
