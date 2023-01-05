import {
  EmailProperty,
  PasswordProperty,
  TextSmProperty,
  PhoneProperty,
  IdProperty,
} from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateEmployeeDto {
  @EmailProperty({ optional: true })
  username: string;

  @PasswordProperty({ optional: true })
  password: string;

  @TextSmProperty({ optional: true })
  pin: string;

  @TextSmProperty({ optional: true })
  firstName: string;

  @TextSmProperty({ optional: true })
  lastName: string;

  @PhoneProperty({ optional: true })
  phone: string;

  @IdProperty({ each: true })
  roles: IdDto[];
}
