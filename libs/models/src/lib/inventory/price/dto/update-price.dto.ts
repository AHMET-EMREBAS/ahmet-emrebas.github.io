import { CreatePriceDto } from './create-price.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePriceDto extends PartialType(CreatePriceDto) {}
