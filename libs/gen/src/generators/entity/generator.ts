import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';

import { Models } from '@techbir/meta';
import { join } from 'path';
import { ModelPrinter } from '@techbir/common';

export async function entityGenerator(tree: Tree) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'entities', 'src', 'lib', Names.fileName);
    console.log(TARGET);
    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      fileName: Names.fileName,
      content: new ModelPrinter('class', 'entity', m).print(),
    });
  }
  await formatFiles(tree);
}

export default entityGenerator;
