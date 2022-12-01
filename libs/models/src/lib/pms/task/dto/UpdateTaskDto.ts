import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './CreateTaskDto';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
