import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { join } from 'path';
import { InterfaceGeneratorSchema } from './schema';
import { load } from 'js-yaml';
import { SourceSchema } from '../common/schema';
import { uniq, upperFirst } from 'lodash';

const SOURCE_FOLDER = join(__dirname, 'files');
const TARGET_FOLDER = join('libs', 'common', 'src', 'lib', 'interface');

function propertyType(t: 'String' | 'Number' | 'Integer' | 'Date' | 'Boolean') {
  return {
    String: 'string',
    Number: 'number',
    Integer: 'number',
    Date: 'Date',
    Boolean: 'boolean',
  }[t];
}
export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const NAMES = names(options.name);
  const schema = load(
    readFileSync(
      join(tree.root, 'source', NAMES.propertyName + '.model.yaml')
    ).toString()
  ) as SourceSchema;

  const properties = Object.entries(schema.properties);

  const relations = Object.entries(schema.relations || {});

  const targets = uniq(
    Object.values(schema.relations || {})
      .map((e) => e.target)
      .map(upperFirst)
  );
  generateFiles(tree, SOURCE_FOLDER, TARGET_FOLDER, {
    ...NAMES,
    properties,
    relations,
    targets,
    propertyType,
    upperFirst,
    temp: '',
  });
  await formatFiles(tree);
}
