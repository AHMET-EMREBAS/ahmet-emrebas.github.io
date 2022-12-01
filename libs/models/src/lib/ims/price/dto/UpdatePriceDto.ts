import { PartialType } from '@nestjs/swagger';
import { CreatePriceDto } from './CreatePriceDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
