import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';

import { FormGeneratorSchema } from './schema';
import { join } from 'path';
import { Models } from '@techbir/meta';
import { ModelPrinter } from '@techbir/common';

export async function formGenerator(tree: Tree, options: FormGeneratorSchema) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'entities', 'src', 'lib', Names.fileName);
    console.log(TARGET);
    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      fileName: Names.fileName,
      formFields: new ModelPrinter('class', 'entity', m).formFields()
    });
  }
  await formatFiles(tree);
}

export default formGenerator;
