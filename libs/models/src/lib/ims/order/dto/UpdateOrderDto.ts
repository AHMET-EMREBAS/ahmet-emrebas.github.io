import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './CreateOrderDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
