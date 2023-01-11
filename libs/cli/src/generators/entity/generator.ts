import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { ENTITY_TARGET_DIRECTORY, loadModel } from '../shared';
import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const NAMES = names(options.name);
  const FILES = join(__dirname, 'files');
  const MODEL = await loadModel(NAMES.fileName);

  const entityImports = new Set<string>();
  const viewImports = new Set<string>();
  const viewColumns = [];
  const selects = new Set();
  const leftJoins = new Set();

  const columns = Object.entries(MODEL.properties || {}).map(([key, value]) => {
    const s = `.addSelect('${NAMES.className}.${key}', '${key}')`;
    selects.add(s);
    viewColumns.push({ key, type: value.type });
    return {
      key,
      type: value.type,
      column: JSON.stringify(value.column),
    };
  });

  const relations = Object.entries(MODEL.relations || {}).map(
    ([key, value]) => {
      viewImports.add(value.target);
      entityImports.add(value.target);
      return {
        key,
        type: value.type,
        target: value.target,
        options: JSON.stringify(value.options),
        join: value.join
          ? value.type.endsWith('Many')
            ? 'JoinTable'
            : 'JoinColumn'
          : '',
      };
    }
  );

  MODEL.views?.forEach((e) => {
    Object.entries(e.viewFields || {}).map(([key, value]) => {
      viewImports.add(e.target);
      viewColumns.push({
        key: names(e.target).propertyName + names(key).className,
        type: value.type,
      });
    });
  });

  MODEL.views?.map((e) => {
    const l = `.leftJoin(${e.target}, '${e.target}', '${
      e.condition ||
      `${e.target}.id = ${e.parent}.${names(e.target).propertyName}Id`
    }')`;
    leftJoins.add(l);
  });

  MODEL.views?.map((e) => {
    return Object.entries(e.viewFields).map(([key, value]) => {
      const s = `.addSelect('${e.target}.${key}', '${
        names(e.target).propertyName
      }${names(key).className}')`;
      selects.add(s);
    });
  });

  await generateFiles(tree, FILES, ENTITY_TARGET_DIRECTORY, {
    columns,
    relations,
    viewColumns,
    entityImports: [...entityImports]?.map((e) => names(e)),
    viewImports: [...viewImports]?.map((e) => names(e)),
    leftJoins,
    selects,
    ...NAMES,
    template: '',
  });
  await formatFiles(tree);
}
