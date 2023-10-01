import { PartialType } from '@nestjs/graphql';
import { CreateStoreInput } from './create-store.input';
import { Input } from '@techbir/core';

@Input()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {}
