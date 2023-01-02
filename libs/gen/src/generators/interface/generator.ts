import { readFile } from 'fs-extra';
import { load } from 'js-yaml';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nrwl/devkit';

import { InterfaceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const schemaPath = join(
    tree.root,
    'projects',
    options.project,
    `${options.name}.meta.yaml`
  );
  const fileContent = (await readFile(schemaPath)).toString();

  const schemaOptions = load(fileContent);

  const target = join(
    'libs',
    'common',
    'src',
    'lib',
    options.project,
    'interfaces'
  );

  await generateFiles(tree, join(__dirname, 'files'), target, {
    name: options.name,
    classname: names(options.name).className,
    options: schemaOptions,
    temp: '',
  });
  await formatFiles(tree);
}
