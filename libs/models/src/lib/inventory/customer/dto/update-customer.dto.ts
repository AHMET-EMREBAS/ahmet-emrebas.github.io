import { CreateCustomerDto } from './create-customer.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
