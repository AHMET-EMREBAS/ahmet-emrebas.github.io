import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { INTERFACE_TARGET_DIRECTORY, loadModel } from '../shared';
import { InterfaceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const NAMES = names(options.name);
  const FILES = join(__dirname, 'files');
  const model = await loadModel(NAMES.fileName);

  const properties = Object.entries(model.properties || {}).map(
    ([key, value]) => {
      return `${key}:${value.type}`;
    }
  );

  const relations = Object.entries(model.relations || {})
    .map(([key, value]) => {
      return `${key}:${value.target} ${
        value.type.endsWith('Many') ? '[]' : ''
      }`;
    })
    .join('\n');

  const imports = Object.entries(model.relations || {})
    .map(([key, value]) => {
      return `import { ${names(value.target).className} } from '../${
        names(value.target).fileName
      }';`;
    })
    .join('\n');

  const views = model.views?.map((e) => {
    return Object.entries(e.viewFields || {}).map(([key, value]) => {
      return `${names(e.target).propertyName}${names(key).className}:${
        value.type
      }`;
    });
  });

  await generateFiles(tree, FILES, INTERFACE_TARGET_DIRECTORY, {
    imports,
    relations,
    properties,
    views,
    ...NAMES,
    template: '',
  });
  await formatFiles(tree);
}
