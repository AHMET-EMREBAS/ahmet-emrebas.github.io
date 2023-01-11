import { ClassBuilder } from '@ae/coder';
import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { join } from 'path';
import { INTERFACE_TARGET_DIRECTORY, loadModel } from '../shared';
import { InterfaceGeneratorSchema } from './schema';

class Groups {
  static readonly I = 'I';
  static readonly I_READ = 'I_READ';
  static readonly ALL = [Groups.I, Groups.I_READ];
}

function isMany(type: string) {
  return type.endsWith('Many') ? '[]' : '';
}

export default async function (tree: Tree, options: InterfaceGeneratorSchema) {
  const NAMES = names(options.name);
  const FILES = join(__dirname, 'files');
  const MODEL = await loadModel(NAMES.fileName);

  const __interface = ClassBuilder.init();

  __interface.addClasName(NAMES.className, 'interface', Groups.I);
  __interface.addClasName('Read' + NAMES.className, 'interface', Groups.I_READ);

  __interface.addProperty({ name: 'id', type: 'number', groups: Groups.ALL });

  Object.entries(MODEL.properties || {}).forEach(([key, value]) => {
    __interface.addProperty({
      name: key,
      type: value.type,
      groups: [Groups.I, Groups.I_READ],
    });
  });

  Object.entries(MODEL.relations || {}).forEach(([name, { type, target }]) => {
    __interface.addGeneric({ value: target, groups: [Groups.I] });
    __interface.addProperty({
      name,
      type: target + isMany(type),
      groups: [Groups.I],
    });
  });

  MODEL.views?.forEach((e) => {
    Object.entries(e.viewFields || {}).map(([key, value]) => {
      __interface.addProperty({
        name: `${names(e.target).propertyName}${names(key).className}`,
        type: value.type,
        groups: [Groups.I_READ],
      });
    });
  });

  const interfaceFile = __interface.toString(Groups.I);
  const readInterfaceFile = __interface.toString(Groups.I_READ);

  await generateFiles(tree, FILES, INTERFACE_TARGET_DIRECTORY, {
    interfaceFile,
    readInterfaceFile,
    template: '',
    ...NAMES,
  });
  await formatFiles(tree);
}
