import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { QuantityView } from '@ae/models/inventory/quantity';

@Injectable()
export class QuantityViewService extends ResourceService<QuantityView> {
  constructor(
    @InjectRepository(QuantityView) __repo: Repository<QuantityView>
  ) {
    super(__repo);
  }
}
