import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './CreateOrderDto';
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
