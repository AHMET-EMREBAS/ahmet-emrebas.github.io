import { namifyObjectByProperty, parseYamlObject } from '@ae/common';
import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { uniqBy } from 'lodash';
import { join } from 'path';
import { formatAndIndex } from '../utils';
import { RgGeneratorSchema } from './schema';

function getHelpers(entity: any) {
  return {
    isUnique: (p: string) => entity.unique?.includes(p),
    isRequired: (p: string) => entity.required?.includes(p),
    genName: (p: string) => names(p),
    uniqueBy: uniqBy,
  };
}

export default async function (tree: Tree, options: RgGeneratorSchema) {
  const file = readFileSync(
    join(tree.root, 'ssot', options.ssot + '.yaml')
  ).toString();

  const ssotContent = parseYamlObject(load(file));

  const ssotObj: any = namifyObjectByProperty(
    ssotContent,
    'properties',
    'entities',
    'views'
  );

  for (const entity of ssotObj.entities) {
    const helper = getHelpers(entity);

    generateFiles(
      tree,
      join(__dirname, 'files', 'entity'),
      join('libs', 'models', 'src', 'lib', entity.name),
      {
        temp: '',
        ...helper,
        ...names(entity.name),
        entity,
      }
    );
    await formatAndIndex(tree, join('libs', 'models', 'src', 'lib'));
  }
}
