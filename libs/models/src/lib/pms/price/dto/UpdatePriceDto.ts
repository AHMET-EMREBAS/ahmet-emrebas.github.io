import { PartialType } from '@nestjs/swagger';
import { CreatePriceDto } from './CreatePriceDto';
export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
