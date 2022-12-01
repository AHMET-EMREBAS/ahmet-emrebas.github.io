import { PartialType } from '@nestjs/swagger';
import { CreateSprintDto } from './CreateSprintDto';
export class UpdateSprintDto extends PartialType(CreateSprintDto) {}
