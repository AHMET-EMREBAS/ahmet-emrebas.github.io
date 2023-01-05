import { CreateTagDto } from './create-tag.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateTagDto extends PartialType(CreateTagDto) {}
