import { CreatePaymentDto } from './create-payment.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
