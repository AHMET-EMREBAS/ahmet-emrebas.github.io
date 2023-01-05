import {
  IdProperty,
  TextSmProperty,
  PositiveNumberProperty,
  PositiveIntegerProperty,
  BarcodeProperty,
} from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateProductDto extends BaseDto {
  @TextSmProperty({ unique: true })
  name: string;

  @PositiveNumberProperty({})
  price: number;

  @PositiveNumberProperty({})
  cost: number;

  @PositiveIntegerProperty({})
  quantity: number;

  @BarcodeProperty({ unique: true })
  barcode: string;

  @IdProperty()
  category: IdDto;

  @IdProperty()
  department: IdDto;
}
