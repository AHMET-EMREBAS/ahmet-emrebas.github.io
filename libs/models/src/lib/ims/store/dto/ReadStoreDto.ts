import { ReadStore } from '@ae/common/ims/store/ReadStore';

import {
  IDDto,
  StringProperty,
  DateProperty,
  NumberProperty,
  BooleanProperty,
  EmailProperty,
  ManyToManyProperty,
  ManyToOneProperty,
  OneToManyProperty,
  OneToOneProperty,
  BaseEntity,
} from '@ae/core';

import { ObjectType } from '@nestjs/graphql';

import { ReadPricelevelDto } from '../../pricelevel/dto/ReadPricelevelDto';

@ObjectType()
export class ReadStoreDto extends BaseEntity implements ReadStore {
  @StringProperty({ description: 'Unique store name' })
  name: string;

  @ManyToOneProperty(ReadPricelevelDto, { description: 'Store price level' })
  pricelevel: ReadPricelevelDto;
}
