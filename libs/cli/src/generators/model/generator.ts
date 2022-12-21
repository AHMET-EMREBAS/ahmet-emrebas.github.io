import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { upperFirst } from 'lodash';
import { join } from 'path';
import { ModelGeneratorSchema } from './schema';
import { propertyType } from '../common/property-type';
import { loadModel } from '../common/load-model';
import { extractGroups } from '../common/extract-groups';

const SOURCE_FOLDER = join(__dirname, 'files');
const TARGET_FOLDER = join('libs', 'models', 'src', 'lib');

/**
 * Check property has unique constraing
 * @param value
 * @returns
 */
function isUnique(value: any) {
  return value.unique === true ? 'unique: true,' : '';
}

/**
 * Check property has nullable constraint
 * @param value
 * @returns
 */
function isNullable(value: any) {
  return value.nullable === true ? 'nullable: true,' : '';
}

export default async function (tree: Tree, options: ModelGeneratorSchema) {
  const NAMES = names(options.name);
  const schema = loadModel(tree, NAMES.name);

  const {
    properties,
    relations,
    relationTargets,
    uniquePropertyTypes,
    uniqueRelationTypes,
  } = extractGroups(schema);

  generateFiles(tree, SOURCE_FOLDER, TARGET_FOLDER, {
    ...NAMES,
    properties,
    relations,
    relationTargets,
    uniquePropertyTypes,
    uniqueRelationTypes,
    propertyType,
    upperFirst,
    temp: '',
    isUnique,
    isNullable,
  });
  await formatFiles(tree);
}
