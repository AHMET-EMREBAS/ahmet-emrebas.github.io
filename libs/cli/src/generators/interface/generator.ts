import { Cls } from '@ae/coder';
import { formatFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { loadModel } from '../shared';
import { InterfaceGeneratorSchema } from './schema';
export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const NAMES = names(options.name);
  const FILES = join(__dirname, 'files');
  const MODEL = await loadModel(NAMES.fileName);

  // const properties = Object.entries(MODEL.properties || {}).map(
  //   ([key, value]) => {
  //     return {
  //       key,
  //       type: value.type,
  //     };
  //   }
  // );

  // const imports = [];

  // const relations = Object.entries(MODEL.relations || {}).map(
  //   ([key, value]) => {
  //     const n = names(value.target);
  //     imports.push(n);
  //     return {
  //       key,
  //       type: value.target + (value.type.endsWith('Many') ? '[]' : ''),
  //     };
  //   }
  // );

  // const views = [];
  // MODEL.views.forEach((e) => {
  //   Object.entries(e.viewFields || {}).map(([key, value]) => {
  //     views.push({
  //       key: names(e.target).propertyName + names(key).className,
  //       type: value.type,
  //     });
  //   });
  // });

  // await generateFiles(tree, FILES, INTERFACE_TARGET_DIRECTORY, {
  //   ...NAMES,
  //   template: '',
  // });
  new Cls({
    name: 'Abc',
    classType: 'class',
  });

  await formatFiles(tree);
}
