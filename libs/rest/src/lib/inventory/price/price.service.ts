import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Price, CreatePriceDto } from '@ae/models/inventory/price';

@Injectable()
export class PriceService extends ResourceService<CreatePriceDto> {
  constructor(@InjectRepository(Price) __repo: Repository<CreatePriceDto>) {
    super(__repo);
  }
}
