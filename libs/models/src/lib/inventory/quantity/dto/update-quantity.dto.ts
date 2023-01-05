import { CreateQuantityDto } from './create-quantity.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {}
