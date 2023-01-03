import { ResourceService } from '@ae/core/rest';
import { Price } from './price.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService extends ResourceService<Price> {
  constructor(@InjectRepository(Price) repo: Repository<Price>) {
    super(repo);
  }
}
