import { uniq, upperFirst } from 'lodash';
import { ModelSchema, Property, Relation } from './model-schema';

export function extractGroups(schema: ModelSchema): {
  properties: [string, Property][];
  relations: [string, Relation][];
  relationTargets: string[];
  uniquePropertyTypes: string[];
  uniqueRelationTypes: string[];
} {
  const properties = Object.entries(schema.properties);
  const relations = Object.entries(schema.relations || {});

  const targets = uniq(
    Object.values(schema.relations || {})
      .map((e) => e.target)
      .map(upperFirst)
  );

  const uniquePropertyTypes = uniq(
    Object.values(schema.properties || {}).map((e) => e.type)
  );

  const uniqueRelationTypes = uniq(Object.values(schema.relations || {})).map(
    (e) => e.type
  );

  return {
    properties,
    relations,
    relationTargets: targets,
    uniquePropertyTypes,
    uniqueRelationTypes,
  };
}
