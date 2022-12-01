import { PartialType } from '@nestjs/swagger';
import { CreateTagDto } from './CreateTagDto';
export class UpdateTagDto extends PartialType(CreateTagDto) {}
