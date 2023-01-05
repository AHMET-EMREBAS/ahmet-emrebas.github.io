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
import { PaymentService } from './payment.service';

@ResourceController()
export class PaymentController {
  constructor(private readonly service: PaymentService) {}

  @PostOne()
  saveOnePayment(@PostBody() body: CreatePaymentDto) {
    return this.service.save(body);
  }

  @DeleteOne()
  deleteOnePayment(@ParamId() id: number) {
    return this.service.delete(id);
  }

  @UpdateOne()
  updateOnePayment(
    @ParamId() id: number,
    @UpdateBody() body: UpdatePaymentDto
  ) {
    return this.service.update(id, body);
  }

  @AddRelation('orders')
  addOrders(options: AddRelationDto) {
    return this.service.add({ ...options, rname: 'orders' });
  }

  @RemoveRelation('orders')
  removeOrders(options: RemoveRelationDto) {
    return this.service.unset({ ...options, rname: 'orders' });
  }
}
