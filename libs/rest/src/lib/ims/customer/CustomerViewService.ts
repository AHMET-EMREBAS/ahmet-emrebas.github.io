import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerView } from '@ae/models/ims/customer';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerViewService extends ResourceViewService<CustomerView> {
  constructor(
    @InjectRepository(CustomerView) customerViewRepo: Repository<CustomerView>
  ) {
    super(customerViewRepo);
  }
}
