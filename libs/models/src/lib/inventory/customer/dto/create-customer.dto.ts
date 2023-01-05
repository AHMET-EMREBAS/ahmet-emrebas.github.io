import {
  IdProperty,
  TextSmProperty,
  EmailProperty,
  PasswordProperty,
  PhoneProperty,
} from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateCustomerDto extends BaseDto {
  @TextSmProperty({})
  type: string;

  @EmailProperty({ unique: true })
  username: string;

  @PasswordProperty({})
  password: string;

  @TextSmProperty({ optional: true })
  firstName: string;

  @TextSmProperty({ optional: true })
  lastName: string;

  @PhoneProperty({})
  phone: string;

  @IdProperty()
  priceLevel: IdDto;
}
