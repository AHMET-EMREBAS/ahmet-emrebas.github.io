import { CreateTransactionDto } from './create-transaction.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {}
