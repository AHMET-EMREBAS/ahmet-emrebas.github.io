import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './CreateCustomerDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
