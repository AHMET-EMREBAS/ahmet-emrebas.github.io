import { Validations } from '@techbir/common';

export class PriceFormDto {
  @Validations({
    defaultValue: 0,
    icon: 'attach_money',
    inputType: 'number',
    label: 'Price',
    maximum: 9007199254740991,
    minimum: 0,
    name: 'price',
    type: 'number',
  })
  price?: number;

  @Validations({
    defaultValue: 0,
    icon: 'money_off',
    inputType: 'number',
    label: 'Cost',
    maximum: 9007199254740991,
    minimum: 0,
    name: 'cost',
    type: 'number',
  })
  cost?: number;
}
