import { ResourceControllerFactory } from '@ae/core/rest';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Product } from '../product/product.entity';
import { CategoryService } from './category.service';

@ApiTags('category')
@Controller('category')
export class CategoryController extends ResourceControllerFactory({
  entity: Product,
}) {
  constructor(private readonly service: CategoryService) {
    super(service);
  }
}
