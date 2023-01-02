import { execSync } from 'child_process';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { BuildGeneratorSchema } from './schema';

export default async function (tree: Tree, options: BuildGeneratorSchema) {
  const APP_NAME = options.name;
  const TARGET = join('dist', 'apps', APP_NAME);
  const FILES = join(__dirname, 'files');
  const OPTIONS = {
    temp: '',
    name: APP_NAME,
    version: '1.0.0',
  };

  console.log(`- Building ${APP_NAME}`);
  execSync(`nx build ${APP_NAME}`);

  await generateFiles(tree, FILES, TARGET, OPTIONS);
  await formatFiles(tree);
}
