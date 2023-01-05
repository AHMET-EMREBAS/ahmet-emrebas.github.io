import { CreatePorderDto } from './create-porder.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdatePorderDto extends PartialType(CreatePorderDto) {}
