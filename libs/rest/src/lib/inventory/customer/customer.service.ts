import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Customer, CreateCustomerDto } from '@ae/models/inventory/customer';

@Injectable()
export class CustomerService extends ResourceService<CreateCustomerDto> {
  constructor(
    @InjectRepository(Customer) __repo: Repository<CreateCustomerDto>
  ) {
    super(__repo);
  }
}
