import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentDto } from './CreateDepartmentDto';
export class  UpdateDepartmentDto extends  PartialType(CreateDepartmentDto){};
