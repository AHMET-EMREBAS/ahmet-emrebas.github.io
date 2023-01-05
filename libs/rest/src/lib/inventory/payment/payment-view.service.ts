import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { PaymentView } from '@ae/models/inventory/payment';

@Injectable()
export class PaymentViewService extends ResourceService<PaymentView> {
  constructor(@InjectRepository(PaymentView) __repo: Repository<PaymentView>) {
    super(__repo);
  }
}
