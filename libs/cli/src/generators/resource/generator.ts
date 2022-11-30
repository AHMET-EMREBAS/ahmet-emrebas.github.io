import { namifyObjectByProperty, parseYamlObject } from '@ae/utils';
import { generateFiles, names, Tree } from '@nrwl/devkit';
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
    join(tree.root, 'source', options.ssot + '.yaml')
  ).toString();

  const ssotContent = parseYamlObject(load(file));

  const ssotObj: any = namifyObjectByProperty(
    ssotContent,
    'properties',
    'entities',
    'views'
  );

  async function generateThem(
    items: any[],
    source: string,
    libraryName: string,
    subfolder = ''
  ) {
    for (const entity of items) {
      const helper = getHelpers(entity);

      await generateFiles(
        tree,
        join(__dirname, 'files', source),
        join('libs', libraryName, 'src', 'lib', subfolder, entity.name),
        {
          projectName: subfolder,
          temp: '',
          ...helper,
          ...names(entity.name),
          entity,
        }
      );
      await formatAndIndex(
        tree,
        join('libs', libraryName, 'src', 'lib', subfolder)
      );
    }
  }

  await generateThem(ssotObj.entities, 'model', 'models', options.ssot);
  await generateThem(ssotObj.entities, 'interface', 'common', options.ssot);
}
