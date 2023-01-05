import {
  TextSmProperty,
  PositiveNumberProperty,
  PositiveIntegerProperty,
  BarcodeProperty,
  IdProperty,
} from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateProductDto {
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
