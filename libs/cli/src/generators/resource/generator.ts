import { namifyObjectByProperty, parseYamlObject } from '@ae/utils';
import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { mkdirSync, readFileSync } from 'fs';
import { load } from 'js-yaml';
import { uniqBy } from 'lodash';
import { join } from 'path';
import { addIndexFile } from '../utils';
import { RgGeneratorSchema } from './schema';

function tryCatch(func: () => any) {
  try {
    func();
  } catch (err) {
    // ignore
  }
}

function getHelpers(entity: any) {
  return {
    isUnique: (p: string) => entity.unique?.includes(p),
    isRequired: (p: string) => entity.required?.includes(p),
    genName: (p: string) => names(p),
    uniqueBy: uniqBy,
  };
}

export default async function (tree: Tree, options: RgGeneratorSchema) {
  const __COMMON_LIBRARY_DIR = join('libs', 'common', 'src', 'lib');
  const __MODELS_LIBRARY_DIR = join('libs', 'models', 'src', 'lib');
  const __REST_LIBRARY_DIR = join('libs', 'rest', 'src', 'lib');

  const COMMON_LIBRARY_DIR = join(__COMMON_LIBRARY_DIR, options.ssot);
  const MODELS_LIBRARY_DIR = join(__MODELS_LIBRARY_DIR, options.ssot);
  const REST_LIBRARY_DIR = join(__REST_LIBRARY_DIR, options.ssot);

  tryCatch(() => mkdirSync(COMMON_LIBRARY_DIR));
  tryCatch(() => mkdirSync(MODELS_LIBRARY_DIR));
  tryCatch(() => mkdirSync(REST_LIBRARY_DIR));

  const MODEL_FILES = 'model';
  const INTERFACE_FILES = 'interface';
  const REST_FILES = 'rest';

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
      await formatFiles(tree);
    }
  }

  await generateThem(ssotObj.entities, MODEL_FILES, 'models', options.ssot);
  await generateThem(ssotObj.entities, INTERFACE_FILES, 'common', options.ssot);
  await generateThem(ssotObj.entities, REST_FILES, 'rest', options.ssot);

  addIndexFile(MODELS_LIBRARY_DIR);
  addIndexFile(COMMON_LIBRARY_DIR);
  addIndexFile(REST_LIBRARY_DIR);
}
