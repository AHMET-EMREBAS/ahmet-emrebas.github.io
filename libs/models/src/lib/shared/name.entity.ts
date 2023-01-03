import {
  NameProperty,
  TextProperty,
} from '@ae/core/property/property.decorator';
import { CommonEntity } from './common.entity';

export class NameEntity extends CommonEntity {
  @NameProperty({ unique: true })
  name: string;

  @TextProperty({ optional: true })
  description: string;
}
