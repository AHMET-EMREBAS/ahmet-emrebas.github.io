import { Price } from '../entity';
import { Property, Dto, IDDto } from '@techbir/core';

@Dto()
export class CreatePriceDto implements Price {
  @Property({ type: 'number', nullable: true }) price?: number | undefined;
  @Property({ type: 'number', nullable: true }) cost?: number | undefined;
  @Property({ type: 'object', target: IDDto, nullable: true }) product?: any;
}
