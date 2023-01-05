import { CreateStoreDto } from './create-store.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {}
