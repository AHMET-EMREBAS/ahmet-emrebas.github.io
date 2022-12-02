import { ReadPricelevel } from '@ae/common/ims/pricelevel/ReadPricelevel';

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

@ObjectType()
export class ReadPricelevelDto extends BaseEntity implements ReadPricelevel {
  @StringProperty({})
  name: string;
}
