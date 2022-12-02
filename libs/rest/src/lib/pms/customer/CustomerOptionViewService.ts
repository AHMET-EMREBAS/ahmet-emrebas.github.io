import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerOptionView } from '@ae/models/pms/customer/CustomerOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerOptionViewService extends ResourceViewService<CustomerOptionView> {
  constructor(
    @InjectRepository(CustomerOptionView)
    customerViewRepo: Repository<CustomerOptionView>
  ) {
    super(customerViewRepo);
  }
}
