import { CommonProperties } from './common-properties';
import { CommonRelations } from './common-relations';
import { ModelMetadata } from './model-metadata';
import { ModelNames } from './model-names';
import { PropertyNames } from './property-names';

export type CreateSubImageModelOptions = {
  modelName: ModelNames;
  relationName: ModelNames;
  relationPropertyName: PropertyNames;
};

export function CreateSubImageModel(
  options: CreateSubImageModelOptions
): ModelMetadata {
  return {
    modelName: options.modelName,
    properties: {
      image: CommonProperties.Image(),
    },
    relations: {
      [options.relationPropertyName]: CommonRelations.Owner(
        options.relationName
      ),
    },
    required: ['image'],
  };
}
