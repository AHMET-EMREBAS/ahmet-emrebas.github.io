import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductView } from '@ae/models/pms/product/ProductView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductViewService extends ResourceViewService<ProductView> {
  constructor(
    @InjectRepository(ProductView) productViewRepo: Repository<ProductView>
  ) {
    super(productViewRepo);
  }
}
