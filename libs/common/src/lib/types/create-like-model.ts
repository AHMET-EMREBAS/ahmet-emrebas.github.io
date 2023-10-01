import { CommonProperties } from './common-properties';
import { CommonRelations } from './common-relations';
import { ModelMetadata } from './model-metadata';
import { ModelNames } from './model-names';
import { PropertyNames } from './property-names';

export type CreateLikeModelOptions = {
  modelName: ModelNames;
  relationPropertyName: PropertyNames;
  relationName: ModelNames;
};

export function CreateLikeModel(
  options: CreateLikeModelOptions
): ModelMetadata {
  return {
    modelName: options.modelName,
    properties: {
      like: CommonProperties.Like(),
    },
    relations: {
      user: CommonRelations.Owner('User'),
      [options.relationPropertyName]: CommonRelations.Owner(
        options.relationName
      ),
    },
  };
}
