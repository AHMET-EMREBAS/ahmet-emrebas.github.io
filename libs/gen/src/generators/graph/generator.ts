import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';

import { Models } from '@techbir/meta';
import { join } from 'path';
import { ModelPrinter } from '@techbir/common';

export async function graphGenerator(tree: Tree) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'entities-graph', 'src', 'lib', Names.fileName);
    console.log(TARGET);
    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      fileName: Names.fileName,
      object: new ModelPrinter('class', 'graphql', m).print(),
      createObject: new ModelPrinter('class', 'graphql-input', m).print(),
    });
  }
  await formatFiles(tree);
}

export default graphGenerator;
