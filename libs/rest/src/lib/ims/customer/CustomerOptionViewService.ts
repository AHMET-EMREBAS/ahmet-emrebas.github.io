import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerOptionView } from '@ae/models/ims/customer/CustomerOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MesssageOptionViewService extends ResourceViewService<CustomerOptionView> {
  constructor(
    @InjectRepository(CustomerOptionView)
    messageViewRepo: Repository<CustomerOptionView>
  ) {
    super(messageViewRepo);
  }
}
