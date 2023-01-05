import { QueryDto } from '@ae/core/dto';
import {
  ResourceController,
  GetAll,
  GetOneById,
  PostOne,
  UpdateOne,
  DeleteOne,
  SetRelation,
  UnsetRelation,
  AddRelation,
  RemoveRelation,
  PostBody,
  UpdateBody,
  QueryObject,
  ParamId,
} from '@ae/core/rest';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@ae/models/inventory/category';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { CategoryService } from './category.service';

@ResourceController()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @PostOne()
  saveOneCategory(@PostBody() body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneCategory(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneCategory(
    @ParamId() id: number,
    @UpdateBody() body: UpdateCategoryDto
  ) {
    return this.service.update(id, body);
  }
}
