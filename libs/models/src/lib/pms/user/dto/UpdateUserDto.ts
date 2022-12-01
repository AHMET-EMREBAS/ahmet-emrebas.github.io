import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './CreateUserDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
