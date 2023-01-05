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
  CreatePaymentDto,
  UpdatePaymentDto,
} from '@ae/models/inventory/payment';
import {
  SetRelationDto,
  UnsetRelationDto,
  AddRelationDto,
  RemoveRelationDto,
} from '@ae/core/dto';
import { PaymentViewService } from './payment-view.service';

@ResourceController()
export class PaymentViewController {
  constructor(private readonly service: PaymentViewService) {}

  @GetAll()
  findPayments(@QueryObject() query: QueryDto) {
    return this.service.find(query);
  }

  @GetOneById()
  findPaymentByIdPayment(@ParamId() id: number) {
    return this.service.findOneById(id);
  }
}
