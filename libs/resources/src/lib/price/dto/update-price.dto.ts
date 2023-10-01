import { PartialType } from '@nestjs/swagger';
import { CreatePriceDto } from './create-price.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
