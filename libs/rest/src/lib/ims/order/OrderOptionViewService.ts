import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderOptionView } from '@ae/models/ims/order/OrderOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<OrderOptionView> {
  constructor(
    @InjectRepository(OrderOptionView)
    messageViewRepo: Repository<OrderOptionView>
  ) {
    super(messageViewRepo);
  }
}
