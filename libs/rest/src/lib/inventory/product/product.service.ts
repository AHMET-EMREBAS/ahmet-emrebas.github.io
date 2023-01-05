import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ResourceService } from '@ae/core/rest';
import { Product, CreateProductDto } from '@ae/models/inventory/product';

@Injectable()
export class ProductService extends ResourceService<CreateProductDto> {
  constructor(@InjectRepository(Product) __repo: Repository<CreateProductDto>) {
    super(__repo);
  }
}
