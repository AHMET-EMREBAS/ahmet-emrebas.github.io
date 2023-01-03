import {
  TextProperty,
  UrlProperty,
} from '@ae/core/property/property.decorator';
import { Entity } from 'typeorm';
import { CommonEntity } from '../shared';

@Entity()
export class Img extends CommonEntity {
  @UrlProperty() url: string;
  @TextProperty({ optional: true }) alt: string;
}
