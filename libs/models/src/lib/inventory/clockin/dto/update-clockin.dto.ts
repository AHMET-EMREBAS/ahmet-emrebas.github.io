import { CreateClockinDto } from './create-clockin.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateClockinDto extends PartialType(CreateClockinDto) {}
