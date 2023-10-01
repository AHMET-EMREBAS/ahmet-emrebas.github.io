import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreatePriceLevelDto } from './create-price-level.dto';

@Dto()
export class UpdatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
