import { PartialType } from '@nestjs/swagger';
import { CreateTransactionDto } from './CreateTransactionDto';
export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
