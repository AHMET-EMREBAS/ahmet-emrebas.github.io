import { CreatePriceLevelInput } from './create-price-level.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdatePriceLevelInput extends PartialType(CreatePriceLevelInput) {}
