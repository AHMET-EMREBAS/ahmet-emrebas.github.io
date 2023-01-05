import { Exclude } from 'class-transformer';

export class BaseDto {
  @Exclude()
  id: number;
}
