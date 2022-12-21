import { Module, OnModuleInit } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '@ae/models/product';
import { Category } from '@ae/models/category';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
})
export class ProductModule implements OnModuleInit {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>
  ) {}
  onModuleInit() {
    this.productRepo.save({
      name: 'product 1',
    });
  }
}
