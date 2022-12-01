import { namifyObjectByProperty, parseYamlObject } from '@ae/utils';
import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { mkdirSync, readFileSync, rmdirSync } from 'fs';
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
  const projectName = options.name;

  const __COMMON_LIBRARY_DIR = join('libs', 'common', 'src', 'lib');
  const __MODELS_LIBRARY_DIR = join('libs', 'models', 'src', 'lib');
  const __REST_LIBRARY_DIR = join('libs', 'rest', 'src', 'lib');

  const COMMON_LIBRARY_DIR = join(__COMMON_LIBRARY_DIR, projectName);
  const MODELS_LIBRARY_DIR = join(__MODELS_LIBRARY_DIR, projectName);
  const REST_LIBRARY_DIR = join(__REST_LIBRARY_DIR, projectName);

  tryCatch(() => mkdirSync(COMMON_LIBRARY_DIR));
  tryCatch(() => mkdirSync(MODELS_LIBRARY_DIR));
  tryCatch(() => mkdirSync(REST_LIBRARY_DIR));

  const MODEL_FILES = 'model';
  const INTERFACE_FILES = 'interface';
  const REST_FILES = 'rest';

  const file = readFileSync(
    join(tree.root, 'source', projectName + '.yaml')
  ).toString();

  const ssotContent = parseYamlObject(load(file));

  const projectObject: any = namifyObjectByProperty(
    ssotContent,
    'properties',
    'entities',
    'views'
  );

  async function generateApiApp(__projectName: string) {
    await generateFiles(
      tree,
      join(__dirname, 'files', 'api'),
      join('apps', 'api', 'src', 'app'),
      {
        projectName: __projectName,
        entities: projectObject.entities,
        temp: '',
        genName: names,
      }
    );
    await formatFiles(tree);
  }

  async function genereateResources(
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

  rmdirSync(COMMON_LIBRARY_DIR);
  rmdirSync(MODELS_LIBRARY_DIR);
  rmdirSync(REST_LIBRARY_DIR);

  await genereateResources(
    projectObject.entities,
    MODEL_FILES,
    'models',
    projectName
  );
  await genereateResources(
    projectObject.entities,
    INTERFACE_FILES,
    'common',
    projectName
  );
  await genereateResources(
    projectObject.entities,
    REST_FILES,
    'rest',
    projectName
  );

  await generateApiApp(projectName);
}
