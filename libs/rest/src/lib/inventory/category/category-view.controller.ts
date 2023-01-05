import { QueryDto } from '@ae/core/dto';
import {
  GetAll,
  GetOneById,
  ParamId,
  QueryObject,
  ResourceController,
} from '@ae/core/rest';
import { CategoryViewService } from './category-view.service';

@ResourceController()
export class CategoryViewController {
  constructor(private readonly service: CategoryViewService) {}

  @GetAll()
  findCategorys(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findCategoryByIdCategory(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
