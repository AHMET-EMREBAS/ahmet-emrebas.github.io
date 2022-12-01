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
  DTO,
} from '@ae/core';

import { ReadPricelevelDto } from '../../Pricelevel';

@DTO()
export class ReadStoreDto implements ReadStore {
  @StringProperty({ required: true })
  name: string;

  @ManyToOneProperty({ required: false })
  pricelevel: ReadPricelevelDto;
}
