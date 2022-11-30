import { PartialType } from '@nestjs/swagger';
import { CreateMessageDto } from './CreateMessageDto';
export class UpdateMessageDto extends PartialType(CreateMessageDto) {}
