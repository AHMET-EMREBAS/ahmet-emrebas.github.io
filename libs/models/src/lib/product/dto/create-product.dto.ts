import { Property, ManyToOneProperty } from '@ae/core/property';
import { IDDto } from '@ae/core/orm';

export class CreateProductDto {
  @Property({
    type: 'String',
    inputType: 'text',
    minLength: 3,
    maxLength: 20,
    unique: true,
  })
  name: string;

  @Property({
    type: 'String',
    inputType: 'textarea',
    maxLength: 400,
    required: false,
  })
  description: string;

  @Property({ type: 'String', inputType: 'text', unique: true, barcode: true })
  upc: string;

  @Property({ type: 'Number', inputType: 'currency', minimum: 0 })
  price: number;

  @Property({ type: 'Number', inputType: 'currency', minimum: 0 })
  cost: number;

  @Property({ type: 'Integer', inputType: 'integer', minimum: 0 })
  quantity: number;

  @ManyToOneProperty()
  category: IDDto;
}
