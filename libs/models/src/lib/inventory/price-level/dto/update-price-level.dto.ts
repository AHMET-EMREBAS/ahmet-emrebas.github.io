import { CreatePriceLevelDto } from './create-price-level.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePriceLevelDto extends PartialType(CreatePriceLevelDto) {}
