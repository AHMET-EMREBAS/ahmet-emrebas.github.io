import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { ServiceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ServiceGeneratorSchema) {
  const PROJECT_NAME = options.project;
  const MODEL_NAME = options.model;

  const FILES = join(__dirname, 'files');
  const TARGET = join('libs', 'rest', 'src', 'lib', PROJECT_NAME);

  await generateFiles(tree, FILES, TARGET, {
    project: PROJECT_NAME,
    ...names(MODEL_NAME),
    template: '',
  });
  await formatFiles(tree);
}
