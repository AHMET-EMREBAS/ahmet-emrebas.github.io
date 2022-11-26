import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { EntityGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { IResource } from '@ae/common';
import { formatAndIndex } from '../utils';
import { uniqBy } from 'lodash';
function getSOTObject(tree: Tree, name: string) {
  const SSOT_FILE = readFileSync(join(tree.root, 'ssot', name + '.yaml'));
  const ssotObject = load(SSOT_FILE.toString()) as IResource;
  return ssotObject;
}

function getHelpers(ssotObject: IResource) {
  return {
    isUnique: (p: string) => ssotObject.unique?.includes(p),
    isRequired: (p: string) => ssotObject.required?.includes(p),
    genName: (p: string) => names(p),
    uniqueBy: uniqBy,
  };
}
export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const RESOURCE_NAMES = names(options.name);
  const SSOT_OBJECT = getSOTObject(tree, RESOURCE_NAMES.fileName);
  const RESOURCE_TYPE = SSOT_OBJECT.type;

  const MODELS_DIR = join('libs', 'models', 'src', 'lib');
  const REST_DIR = join('libs', 'rest', 'src', 'lib');
  const INTERFACE_DIR = join('libs', 'common', 'src', 'lib', 'interface');

  const ENTITY_SOURCE = join(__dirname, RESOURCE_TYPE);
  const ENTITY_TARGET = join(MODELS_DIR, RESOURCE_NAMES.fileName);

  const INTERFACE_SOURCE = join(__dirname, RESOURCE_TYPE + '-interface');
  const INTERFACE_TARGET = join(INTERFACE_DIR, RESOURCE_NAMES.fileName);

  const CONTROLLER_SOURCE = join(__dirname, RESOURCE_TYPE + '-controller');
  const CONTROLLER_TARGET = join(REST_DIR, RESOURCE_NAMES.fileName);

  if (SSOT_OBJECT.type === 'single-resource') {
    // generate entity
    generateFiles(tree, ENTITY_SOURCE, ENTITY_TARGET, {
      ...RESOURCE_NAMES,
      temp: '',
    });

    // genereate interface
    generateFiles(tree, INTERFACE_SOURCE, INTERFACE_TARGET, {
      ...RESOURCE_NAMES,
      temp: '',
    });

    // generate controller

    generateFiles(tree, CONTROLLER_SOURCE, CONTROLLER_TARGET, {
      ...RESOURCE_NAMES,
      temp: '',
    });
  } else {
    const allitems = Object.entries(SSOT_OBJECT.properties);
    const properties = allitems.filter((e) => !e?.[1]?.['target']);
    const relations = allitems.filter((e) => e?.[1]?.['target']);

    // genereate entity
    generateFiles(tree, ENTITY_SOURCE, ENTITY_TARGET, {
      ...RESOURCE_NAMES,
      ...getHelpers(SSOT_OBJECT),
      properties,
      relations,
      temp: '',
    });

    // generate interface
    generateFiles(tree, INTERFACE_SOURCE, INTERFACE_TARGET, {
      ...RESOURCE_NAMES,
      ...getHelpers(SSOT_OBJECT),
      properties,
      relations,
      temp: '',
    });
  }

  // generate interface

  await formatAndIndex(tree, MODELS_DIR);
}
