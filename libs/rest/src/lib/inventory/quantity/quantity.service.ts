import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Quantity, CreateQuantityDto } from '@ae/models/inventory/quantity';

@Injectable()
export class QuantityService extends ResourceService<CreateQuantityDto> {
  constructor(
    @InjectRepository(Quantity) __repo: Repository<CreateQuantityDto>
  ) {
    super(__repo);
  }
}
