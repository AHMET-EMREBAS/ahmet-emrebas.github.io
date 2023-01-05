import {
  IdProperty,
  EmailProperty,
  PasswordProperty,
  TextSmProperty,
  PhoneProperty,
} from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateEmployeeDto extends BaseDto {
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
