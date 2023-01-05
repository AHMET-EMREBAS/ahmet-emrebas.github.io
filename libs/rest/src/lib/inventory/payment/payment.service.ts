import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Payment, CreatePaymentDto } from '@ae/models/inventory/payment';

@Injectable()
export class PaymentService extends ResourceService<CreatePaymentDto> {
  constructor(@InjectRepository(Payment) __repo: Repository<CreatePaymentDto>) {
    super(__repo);
  }
}
