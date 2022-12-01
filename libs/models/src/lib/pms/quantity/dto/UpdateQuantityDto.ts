import { PartialType } from '@nestjs/swagger';
import { CreateQuantityDto } from './CreateQuantityDto';
export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {}
