import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';
import { join } from 'path';
import { Models } from '@techbir/meta';
import { uniq } from '@techbir/utils';
import { Model } from '@techbir/common';

function relationTargets(model: Model) {
  const relations: string[] = [];
  Object.entries(model.relations || {}).forEach(([name, value]) => {
    relations.push(value.target);

    const found = Models.find(
      (e) => e.name.toLowerCase() === value.target.toLowerCase()
    );

    if (found) {
      relations.push(...relationTargets(found));
    }
  });

  return uniq([...relations]);
}

export async function resourceGenerator(tree: Tree) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'resources', 'src', 'lib', Names.fileName);

    const uniqueProperties = Object.entries(m.properties || {})
      .filter(([key, value]) => value.unique)
      .map(([key, value]) => value.name)
      .map((e) => `"${e}"`)
      .join(',');

    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      relationTargets: relationTargets(m).join(','),
      uniqueProperties,
    });
  }
  await formatFiles(tree);
}

export default resourceGenerator;
