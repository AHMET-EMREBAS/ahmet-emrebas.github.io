import { PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './CreateProjectDto';
export class UpdateProjectDto extends PartialType(CreateProjectDto) {}
