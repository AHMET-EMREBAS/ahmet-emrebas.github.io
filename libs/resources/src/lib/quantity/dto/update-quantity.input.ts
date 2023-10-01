import { PartialType } from '@nestjs/graphql';
import { CreateQuantityInput } from './create-quantity.input';
import { Input } from '@techbir/core';

@Input()
export class UpdateQuantityInput extends PartialType(CreateQuantityInput) {}
