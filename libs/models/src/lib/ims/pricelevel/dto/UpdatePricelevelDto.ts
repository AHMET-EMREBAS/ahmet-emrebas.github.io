import { PartialType } from '@nestjs/swagger';
import { CreatePricelevelDto } from './CreatePricelevelDto';
export class  UpdatePricelevelDto extends  PartialType(CreatePricelevelDto){};
