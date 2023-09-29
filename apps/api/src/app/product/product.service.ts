import { Repository } from 'typeorm';
import { Product } from './entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private readonly repo: Repository<Product>) {}
}
