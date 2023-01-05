import { IdProperty, TextSmProperty } from '@ae/core/property';
import { IdDto, BaseDto } from '@ae/core/dto';

export class CreateRoleDto extends BaseDto {
  @TextSmProperty({ unique: true })
  name: string;

  @IdProperty({ each: true })
  permissions: IdDto[];
}
