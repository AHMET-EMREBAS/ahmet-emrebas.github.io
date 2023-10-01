import { CommonProperties } from './common-properties';
import { CommonRelations } from './common-relations';
import { ModelMetadata } from './model-metadata';
import { ModelNames } from './model-names';
import { PropertyNames } from './property-names';

export type CreateSubModelOptions = {
  modelName: ModelNames;
  propertyName: PropertyNames;
  relationName: ModelNames;
  relationPropertyName: PropertyNames;
};

export function CreateSubModel(options: CreateSubModelOptions): ModelMetadata {
  return {
    modelName: options.modelName,
    properties: {
      [options.propertyName]: CommonProperties.Description(),
    },
    relations: {
      [options.relationPropertyName]: CommonRelations.Owner(
        options.relationName
      ),
    },
    required: [options.propertyName],
  };
}
