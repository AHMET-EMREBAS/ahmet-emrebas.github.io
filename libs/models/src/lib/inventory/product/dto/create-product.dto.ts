import { undefined } from '@ae/core/property';

export class CreateProductDto {
  @TextSmProperty({ type: 'text-sm', label: 'Product Name' })
  name: string;

  @PositiveNumberProperty({
    type: 'number-positive',
    label: 'Unit Price',
    prefix: 'CURRENCY',
  })
  price: number;

  @PositiveNumberProperty({
    type: 'number-positive',
    label: 'Unit Cost',
    prefix: 'CURRENCY',
  })
  cost: number;

  @PositiveNumberProperty({ type: 'number-positive', label: 'Quantity' })
  quantity: number;

  @BarcodeProperty({ type: 'barcode', label: 'Barcode' })
  barcode: string;

  @IdProperty()
  category: IDDto[];

  @IdProperty()
  department: IDDto[];
}
