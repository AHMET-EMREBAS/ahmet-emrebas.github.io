import { Property } from '@ae/core';

export class CreateSampleDto {
  @Property({ minLength: 2, maxLength: 30 })
  name: string;
}
