import { PartialType } from '@nestjs/graphql';
import { CreateFeatureInput } from './create-feature.input';
import { Input } from '@techbir/core';

@Input()
export class UpdateFeatureInput extends PartialType(CreateFeatureInput) {}
