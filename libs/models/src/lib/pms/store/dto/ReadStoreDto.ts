import { ReadStore } from '@ae/common/pms/store/CreateStore';

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
} from '@ae/core';

import { ReadPricelevelDto } from '../../Pricelevel';

export class ReadStoreDto implements ReadStore {
  @StringProperty({ required: true })
  name: string;

  @ManyToOneProperty({ required: false })
  pricelevel: ReadPricelevelDto;
}
