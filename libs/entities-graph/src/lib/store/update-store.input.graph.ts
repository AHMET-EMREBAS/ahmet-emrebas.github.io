/** Generated by @techbir/gen:entity */

import { CreateStoreInput } from './create-store.input.graph';
import { PartialType } from '@nestjs/graphql';
import { Input } from '@techbir/core';

@Input()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {}
