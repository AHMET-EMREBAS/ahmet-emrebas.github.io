import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './CreateTaskDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
