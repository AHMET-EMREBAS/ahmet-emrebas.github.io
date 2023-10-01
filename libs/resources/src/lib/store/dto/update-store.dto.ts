import { PartialType } from '@nestjs/swagger';
import { CreateStoreDto } from './create-store.dto';
import { Dto } from '@techbir/core';

@Dto()
export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
