import { CreateDepartmentDto } from './create-department.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
