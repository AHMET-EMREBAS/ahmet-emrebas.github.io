import {
  TextSmProperty,
  EmailProperty,
  PasswordProperty,
  PhoneProperty,
  IdProperty,
} from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateCustomerDto {
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
