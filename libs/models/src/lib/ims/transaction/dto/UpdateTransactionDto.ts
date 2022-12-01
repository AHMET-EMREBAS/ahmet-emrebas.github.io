import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './CreateTransactionDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
