import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';

import { ResourceGeneratorSchema } from './schema';
import { join } from 'path';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const TARGET_DIR = join('/libs/resources/src/lib');

  generateFiles(tree, join(__dirname, 'files'), TARGET_DIR, {
    ...names(options.name),
  });

  await formatFiles(tree);
}

export default resourceGenerator;
