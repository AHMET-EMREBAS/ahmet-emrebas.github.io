import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { SchemaInterface } from '../shared';
import { ControllerGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ControllerGeneratorSchema) {
  const PROJECT_NAME = options.project;
  const MODEL_NAME = options.model;

  const MODEL_SCHEMA_PATH = join(
    'resources',
    PROJECT_NAME,
    MODEL_NAME + '.yaml'
  );

  const FILES = join(__dirname, 'files');
  const TARGET = join('libs', 'rest', 'src', 'lib', PROJECT_NAME);

  const MODEL_SCHEMA = (await load(
    readFileSync(MODEL_SCHEMA_PATH).toString()
  )) as SchemaInterface;

  const relationals = Object.entries(MODEL_SCHEMA.relations || {}).map(
    ([key, value]) => {
      return {
        ...names(key),
        ...value,
      };
    }
  );

  await generateFiles(tree, FILES, TARGET, {
    project: PROJECT_NAME,
    ...names(MODEL_NAME),
    relationals,
    template: '',
  });
  await formatFiles(tree);
}
