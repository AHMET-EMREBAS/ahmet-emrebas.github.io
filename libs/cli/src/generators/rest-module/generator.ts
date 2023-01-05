import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { SchemaInterface } from '../shared';
import { RestModuleGeneratorSchema } from './schema';

export default async function (tree: Tree, options: RestModuleGeneratorSchema) {
  const PROJECT_NAME = options.project;
  const MODEL_NAME = options.model;

  const FILES = join(__dirname, 'files');
  const TARGET = join('libs', 'rest', 'src', 'lib', PROJECT_NAME);

  const MODEL_SCHEMA_PATH = join(
    'resources',
    PROJECT_NAME,
    MODEL_NAME + '.yaml'
  );

  const MODEL_SCHEMA = (await load(
    readFileSync(MODEL_SCHEMA_PATH).toString()
  )) as SchemaInterface;

  const targetClasses = [
    ...new Set(
      Object.values(MODEL_SCHEMA.relations || {}).map((e) => e.target)
    ),
  ].join(',');

  const targetImports = targetClasses
    .split(',')
    .map((e) => {
      if (e.trim().length <= 0) {
        return '';
      }
      return `import { ${e} } from '@ae/models/${PROJECT_NAME}/${
        names(e).fileName
      }'`;
    })
    .join(';\n');
  await generateFiles(tree, FILES, TARGET, {
    project: PROJECT_NAME,
    ...names(MODEL_NAME),
    targetClasses,
    targetImports,
    template: '',
  });
  await formatFiles(tree);
}
