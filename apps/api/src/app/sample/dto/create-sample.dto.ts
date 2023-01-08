import { Property } from '@ae/core';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateSampleDto {
  @Property({ minLength: 2, maxLength: 30 })
  name: string;
}
