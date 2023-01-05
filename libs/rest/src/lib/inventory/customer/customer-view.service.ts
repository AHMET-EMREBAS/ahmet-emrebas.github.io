import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { CustomerView } from '@ae/models/inventory/customer';

@Injectable()
export class CustomerViewService extends ResourceService<CustomerView> {
  constructor(
    @InjectRepository(CustomerView) __repo: Repository<CustomerView>
  ) {
    super(__repo);
  }
}
