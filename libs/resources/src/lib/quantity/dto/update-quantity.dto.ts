import { PartialType } from '@nestjs/swagger';
import { CreateQuantityDto } from './create-quantity.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {}
