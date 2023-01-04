import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { InterfaceGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { readFileSync } from 'fs';
import { SchemaInterface } from '../shared/schema.interface';
import { parsePropertyType } from '../shared';

export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const PROJECT_NAME = options.project;
  const MODEL_NAME = options.model;

  const MODEL_SCHEMA_PATH = join(
    'resources',
    PROJECT_NAME,
    MODEL_NAME + '.yaml'
  );

  const FILES = join(__dirname, 'files');
  const TARGET = join('libs', 'common', 'src', 'lib', PROJECT_NAME);

  const MODEL_SCHEMA = (await load(
    readFileSync(MODEL_SCHEMA_PATH).toString()
  )) as SchemaInterface;

  const properties = [
    ...Object.entries(MODEL_SCHEMA.properties || {}).map(([key, value]) => {
      return `${key}: ${parsePropertyType(value.type)}`;
    }),
    ...Object.entries(MODEL_SCHEMA.relations || {}).map(([key, value]) => {
      return `${key}: ${value.target} ${
        value.type.endsWith('Many') ? '[]' : ''
      }`;
    }),
  ];

  const readProperties = [
    ...Object.entries(MODEL_SCHEMA.properties || {}).map(([key, value]) => {
      return `${key}: ${parsePropertyType(value.type)}`;
    }),
  ];

  Object.values(MODEL_SCHEMA.relations || {}).map((value) => {
    for (const { as, type } of Object.values(value.views)) {
      readProperties.push(`${as}:${type || 'string'}`);
    }
  });

  const createProperties = [
    ...Object.entries(MODEL_SCHEMA.properties || {}).map(([key, value]) => {
      return `${key}: ${parsePropertyType(value.type)}`;
    }),
    ...Object.entries(MODEL_SCHEMA.relations || {}).map(([key, value]) => {
      return `${key}: ${
        value.type.endsWith('Many') ? '{ id:number}[]' : 'number'
      }`;
    }),
  ];

  const generics = `<${[
    ...new Set(
      Object.values(MODEL_SCHEMA.relations || {}).map((e) => e.target)
    ),
  ].join(', ')}>`;

  generateFiles(tree, FILES, TARGET, {
    properties,
    readProperties,
    generics,
    ...names(MODEL_NAME),
    template: '',
    createProperties,
  });
  await formatFiles(tree);
}
