import { ResourceService } from '@ae/core/rest';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo);
  }
}
