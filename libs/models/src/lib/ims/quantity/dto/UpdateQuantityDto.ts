import { PartialType } from '@nestjs/swagger';
import { CreateQuantityDto } from './CreateQuantityDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateQuantityDto extends PartialType(CreateQuantityDto) {}
