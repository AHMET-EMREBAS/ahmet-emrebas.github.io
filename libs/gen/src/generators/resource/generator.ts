import { formatFiles, generateFiles, Tree, names } from '@nx/devkit';
import { join } from 'path';
import { Models } from '@techbir/meta';

export async function resourceGenerator(tree: Tree) {
  for (const m of Models) {
    const Names = names(m.name);
    const TARGET = join('libs', 'resources', 'src', 'lib', Names.fileName);
    console.log(TARGET);
    generateFiles(tree, join(__dirname, 'files'), TARGET, {
      ...names(m.name),
      relationTargets: Object.entries(m.relations || {})
        .map(([key, value]) => {
          return value.target;
        })
        .join(','),
    });
  }
  await formatFiles(tree);
}

export default resourceGenerator;
