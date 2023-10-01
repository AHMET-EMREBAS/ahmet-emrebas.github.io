import { PartialType } from '@nestjs/swagger';
import { CreateFeatureDto } from './create-feature.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {}
