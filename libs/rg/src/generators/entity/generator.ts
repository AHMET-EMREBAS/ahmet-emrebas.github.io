import { generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { join } from 'path';
import { EntityGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { IResource } from '@ae/common';
export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const resourceNames = names(options.name);
  const ssotFile = readFileSync(
    join(tree.root, 'ssot', resourceNames.fileName + '.yaml')
  );

  const ssotObject = load(ssotFile.toString()) as IResource;
  const files = ssotObject.type;

  const source = join(__dirname, files);
  const target = join(
    tree.root,
    'models',
    'src',
    'lib',
    resourceNames.fileName
  );

  console.table({
    source,
    target,
  });

  await generateFiles(tree, source, target, resourceNames);
}
