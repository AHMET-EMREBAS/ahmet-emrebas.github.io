import { Icon } from './icons';
import { ModelNames } from './model-names';
import { PropertyNames } from './property-names';
import { PropertyOptions } from './property-options';
import { RelationOptions } from './relation-options';

export type ModelMetadata = {
  /**
   * Model name is used to realted the model when the object is used for code generation.
   */
  modelName: ModelNames;

  icon?: Icon;
  /**
   * Properties of the model, each model must have at least one property
   */
  properties: Partial<Record<PropertyNames, PropertyOptions>>;

  /**
   * Models might have a realtion with another model.
   * This is the place to define the relation.
   */
  relations?: Partial<Record<PropertyNames, RelationOptions>>;

  /**
   * Unique properties
   */
  uniques?: PropertyNames[];

  /**
   * Required properties
   */
  required?: PropertyNames[];

  /**
   * Queriable properties
   */
  searchable?: PropertyNames[];
};
