import { undefined } from '@ae/core/property';

export class CreateDepartmentDto {
  @TextSmProperty({ type: 'text-sm', label: 'Department Name' })
  name: string;
}
