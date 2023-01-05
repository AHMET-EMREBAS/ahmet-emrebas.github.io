import { IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateTransactionDto {
  @IdProperty({ each: true })
  orders: IdDto[];
}
