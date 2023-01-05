import { TextSmProperty, IdProperty } from '@ae/core/property';
import { IdDto } from '@ae/core/dto';
export class CreateRoleDto {
  @TextSmProperty({ unique: true })
  name: string;

  @IdProperty({ each: true })
  permissions: IdDto[];
}
