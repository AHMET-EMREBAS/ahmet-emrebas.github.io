import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import { join } from 'path';
import { Models } from '@techbir/meta';
import { ModelPrinter } from '@techbir/common';

export async function formGenerator(tree: Tree) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'forms', 'src', 'lib', Names.fileName);
    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      fileName: Names.fileName,
      columnNames: Object.entries(m.properties || {})
        .map(([key, value]) => value.name)
        .map((e) => `"${e}"`)
        .join(','),
      formFields: new ModelPrinter('class', 'entity', m).formFields(),
      formProperties: new ModelPrinter('class', 'entity', m).formProperties(),
      interfaceProperties: new ModelPrinter('interface', 'client', m).properties(),
    });
  }
  await formatFiles(tree);
}

export default formGenerator;
