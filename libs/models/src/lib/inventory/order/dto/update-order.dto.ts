import { CreateOrderDto } from './create-order.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
