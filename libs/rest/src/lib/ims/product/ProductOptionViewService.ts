import { ResourceViewService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductOptionViewService extends ResourceViewService<ProductOptionView> {
  constructor(
    @InjectRepository(ProductOptionView)
    productViewRepo: Repository<ProductOptionView>
  ) {
    super(productViewRepo);
  }
}
