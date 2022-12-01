import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './CreateCartDto';
export class UpdateCartDto extends PartialType(CreateCartDto) {}
