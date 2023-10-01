import { PartialType } from '@nestjs/swagger';
import { Dto } from '@techbir/core';
import { CreatePriceDto } from './create-price.dto';

@Dto()
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
