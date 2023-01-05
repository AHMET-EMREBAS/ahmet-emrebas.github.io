import { CreateEmployeeDto } from './create-employee.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
