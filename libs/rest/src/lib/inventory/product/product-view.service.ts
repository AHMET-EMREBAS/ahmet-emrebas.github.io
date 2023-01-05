import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { ProductView } from '@ae/models/inventory/product';

@Injectable()
export class ProductViewService extends ResourceService<ProductView> {
  constructor(@InjectRepository(ProductView) __repo: Repository<ProductView>) {
    super(__repo);
  }
}
