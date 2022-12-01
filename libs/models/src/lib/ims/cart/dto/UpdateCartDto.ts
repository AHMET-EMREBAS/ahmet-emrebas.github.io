import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './CreateCartDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateCartDto extends PartialType(CreateCartDto) {}
