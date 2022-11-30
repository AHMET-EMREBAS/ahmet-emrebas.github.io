import { PartialType } from '@nestjs/swagger';
import { CreateStoreDto } from './CreateStoreDto';
export class  UpdateStoreDto extends  PartialType(CreateStoreDto){};
