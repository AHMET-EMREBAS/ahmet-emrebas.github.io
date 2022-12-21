import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { join } from 'path';
import { InterfaceGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { ModelSchema } from '../common/model-schema';
import { propertyType } from '../common/property-type';
import { uniq, upperFirst } from 'lodash';
import { loadModel } from '../common/load-model';
import { extractGroups } from '../common/extract-groups';

const SOURCE_FOLDER = join(__dirname, 'files');
const TARGET_FOLDER = join('libs', 'common', 'src', 'lib', 'interface');

export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const NAMES = names(options.name);
  const schema = loadModel(tree, NAMES.name);

  const { properties, relations, relationTargets } = extractGroups(schema);

  generateFiles(tree, SOURCE_FOLDER, TARGET_FOLDER, {
    ...NAMES,
    properties,
    relations,
    relationTargets,
    propertyType,
    upperFirst,
    temp: '',
  });
  await formatFiles(tree);
}
