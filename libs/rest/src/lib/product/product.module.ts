import { IProduct } from '@ae/common';
import { Category, Product } from '@ae/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

const a: IProduct<any> = {
  category: {},
  description: 'some',
  name: 'some',
};
console.log(a);

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
