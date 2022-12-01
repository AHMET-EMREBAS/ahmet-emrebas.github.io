import { ResourceService } from '@ae/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '@ae/models/pms/product/Product';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) productRepo: Repository<Product>) {
    super(productRepo);
  }
}
