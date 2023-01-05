import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readdirSync } from 'fs';
import { join } from 'path';
import { ImportRestGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ImportRestGeneratorSchema) {
  const PROJECT_NAME = options.project;

  const TARGET = join('libs', 'rest', 'src', 'lib', PROJECT_NAME);
  const FILES = join(__dirname, 'files');

  const restModules = readdirSync(join(TARGET))
    .map((e) => {
      if (e.endsWith('.ts')) return;
      return `export {${names(e).className + 'Module'}} from './${e}'`;
    })
    .join('\n');

  generateFiles(tree, FILES, TARGET, { restModules, template: '' });
  await formatFiles(tree);
}
