import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './CreateCustomerDto';
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
