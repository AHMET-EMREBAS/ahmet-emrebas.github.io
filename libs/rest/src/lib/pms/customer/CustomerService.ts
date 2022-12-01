import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '@ae/models/pms/customer/Customer';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService extends ResourceService<Customer> {
  constructor(@InjectRepository(Customer) customerRepo: Repository<Customer>) {
    super(customerRepo);
  }
}
