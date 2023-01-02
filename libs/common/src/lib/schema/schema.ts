import { Property, Relation } from './property';

export interface Schema {
  properties: Record<string, Property<unknown>>;
  relations: Record<string, Relation<unknown>>;
}
