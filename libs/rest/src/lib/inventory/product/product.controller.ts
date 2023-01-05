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
  CreateProductDto,
  UpdateProductDto,
} from '@ae/models/inventory/product';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { ProductService } from './product.service';

@ResourceController()
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @PostOne()
  saveOneProduct(@PostBody() body: CreateProductDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneProduct(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneProduct(
    @ParamId() id: number,
    @UpdateBody() body: UpdateProductDto
  ) {
    return this.service.update(id, body);
  }

  @SetRelation('category')
  setCategory(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'category' });
  }

  @UnsetRelation('category')
  unsetCategory(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'category' });
  }

  @SetRelation('department')
  setDepartment(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'department' });
  }

  @UnsetRelation('department')
  unsetDepartment(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'department' });
  }
}
