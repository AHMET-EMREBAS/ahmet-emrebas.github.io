import { PartialType } from '@nestjs/swagger';
import { CreateStoreDto } from './CreateStoreDto';
import { DTO } from '@ae/core';

@DTO()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
