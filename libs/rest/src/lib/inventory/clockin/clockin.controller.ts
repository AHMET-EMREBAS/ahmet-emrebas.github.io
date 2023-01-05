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
  CreateClockinDto,
  UpdateClockinDto,
} from '@ae/models/inventory/clockin';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { ClockinService } from './clockin.service';

@ResourceController()
export class ClockinController {
  constructor(private readonly service: ClockinService) {}

  @PostOne()
  saveOneClockin(@PostBody() body: CreateClockinDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOneClockin(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOneClockin(
    @ParamId() id: number,
    @UpdateBody() body: UpdateClockinDto
  ) {
    return this.service.update(id, body);
  }

  @SetRelation('employee')
  setEmployee(options: SetRelationDto) {
    return this.service.set({ ...options, rname: 'employee' });
  }

  @UnsetRelation('employee')
  unsetEmployee(options: UnsetRelationDto) {
    return this.service.unset({ ...options, rname: 'employee' });
  }
}
