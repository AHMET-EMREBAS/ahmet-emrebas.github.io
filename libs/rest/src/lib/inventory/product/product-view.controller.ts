import { QueryDto } from '@ae/core/dto';
import {
  GetAll,
  GetOneById,
  ParamId,
  QueryObject,
  ResourceController,
} from '@ae/core/rest';
import { ProductViewService } from './product-view.service';

@ResourceController()
export class ProductViewController {
  constructor(private readonly service: ProductViewService) {}

  @GetAll()
  findProducts(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findProductByIdProduct(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
