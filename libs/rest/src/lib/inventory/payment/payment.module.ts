import { Module, OnModuleInit } from '@nestjs/common';
import { Payment, PaymentView } from '@ae/models/inventory/payment';
import { PaymentController } from './payment.controller';
import { PaymentViewController } from './payment-view.controller';
import { PaymentService } from './payment.service';
import { PaymentViewService } from './payment-view.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Porder } from '@ae/models/inventory/porder';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, PaymentView, Porder])],
  controllers: [PaymentController, PaymentViewController],
  providers: [PaymentService, PaymentViewService],
})
export class PaymentModule implements OnModuleInit {
  constructor(private readonly service: PaymentService) {}
  onModuleInit() {
    // Seed database
  }
}
