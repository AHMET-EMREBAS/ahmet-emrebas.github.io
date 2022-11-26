import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { EntityGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { IResource } from '@ae/common';
import { formatAndIndex } from '../utils';

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
  };
}
export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const RESOURCE_NAMES = names(options.name);
  const SSOT_OBJECT = getSOTObject(tree, RESOURCE_NAMES.fileName);
  const RESOURCE_TYPE = SSOT_OBJECT.type;

  const MODELS_DIR = join('libs', 'models', 'src', 'lib');
  const INTERFACE_DIR = join('libs', 'common', 'src', 'lib', 'interface');
  const INTERFACE_SOURCE = join(__dirname, 'interface');
  const INTERFACE_TARGET = join(
    __dirname,
    'interface',
    RESOURCE_NAMES.fileName
  );

  const ENTITY_SOURCE = join(__dirname, RESOURCE_TYPE);
  const ENTITY_TARGET = join(MODELS_DIR, RESOURCE_NAMES.fileName);

  if (SSOT_OBJECT.type === 'single-resource') {
    // generate entity
    generateFiles(tree, ENTITY_SOURCE, ENTITY_TARGET, {
      ...RESOURCE_NAMES,
      temp: '',
    });
    // genereate interface
    generateFiles(tree, INTERFACE_SOURCE, INTERFACE_DIR, INTERFACE_TARGET);
  } else {
    const properties = Object.entries(SSOT_OBJECT.properties);
    generateFiles(tree, ENTITY_SOURCE, ENTITY_TARGET, {
      ...RESOURCE_NAMES,
      ...getHelpers(SSOT_OBJECT),
      properties,
      relations: properties.filter((e) => e?.[1]?.['target']),
      object: SSOT_OBJECT,
      temp: '',
    });
  }

  // generate interface

  await formatAndIndex(tree, MODELS_DIR);
}
