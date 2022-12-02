import { Args } from '@nestjs/graphql';
import {
  GAdd,
  GCount,
  GOptions,
  GRead,
  GReadById,
  GRemove,
  GSet,
  GUnset,
  GUpdate,
  GDelete,
  GWrite,
  ArgId,
  ArgRid,
  QueryDto,
  Resolver,
} from '@ae/core';
import { Product } from '@ae/models/ims/product/Product';
import { ProductView } from '@ae/models/ims/product/ProductView';
import { ProductOptionView } from '@ae/models/ims/product/ProductOptionView';
import { CreateProductDto } from '@ae/models/ims/product/dto/CreateProductDto';
import { UpdateProductDto } from '@ae/models/ims/product/dto/UpdateProductDto';

import { ProductService } from './ProductService';
import { ProductViewService } from './ProductViewService';
import { ProductOptionViewService } from './ProductOptionViewService';

@Resolver(Product)
export class ProductResolver {
  constructor(
    private readonly service: ProductService,
    private readonly viewService: ProductViewService,
    private readonly optionViewService: ProductOptionViewService
  ) {}

  @GRead(Product)
  findProduct(@Args('query') query?: QueryDto<Product & ProductView>) {
    if (query.view === true) {
      return this.viewService.find(query);
    }
    return this.service.find(query);
  }

  @GReadById(Product)
  findByProductId(@ArgId() id: number) {
    return this.service.findOneBy({ id });
  }

  @GWrite(Product)
  saveProduct(@Args('product') body: CreateProductDto) {
    return this.service.save(body);
  }

  @GWrite([Product])
  async saveProducts(
    @Args('products', { type: () => [CreateProductDto] })
    body: CreateProductDto[]
  ) {
    return this.service.saveMany(body);
  }

  @GUpdate()
  updateProduct(@ArgId() id: number, @Args('product') body: UpdateProductDto) {
    return this.service.update(id, body);
  }

  @GDelete()
  deleteProduct(@ArgId() id: number) {
    return this.service.delete(id);
  }

  @GSet('category')
  setProductCategory(@ArgId() id: number, @ArgRid() categoryId: number) {
    return this.service.set(id, categoryId, 'category');
  }

  @GUnset('category')
  unsetProductCategory(@ArgId() id: number) {
    return this.service.unset(id, 'category');
  }

  @GCount()
  countProduct() {
    return this.service.count();
  }

  @GOptions()
  optionsProduct(@Args('query') query: QueryDto<Product & ProductView>) {
    return this.optionViewService.find(query);
  }
}
