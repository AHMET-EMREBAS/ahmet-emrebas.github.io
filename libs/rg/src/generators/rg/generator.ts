import { namifyObjectByProperty, parseYamlObject } from '@ae/common';
import { Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { RgGeneratorSchema } from './schema';

export default async function (tree: Tree, options: RgGeneratorSchema) {
  const SSOT_TARGET_PATH = join(tree.root, 'ssot', options.ssot + '.yaml');

  const file = readFileSync(SSOT_TARGET_PATH).toString();
  const ssotContent = parseYamlObject(load(file));

  const ssotObj: any = namifyObjectByProperty(
    ssotContent,
    'properties',
    'entities',
    'views'
  );

  for (const entity of ssotObj.entities) {
    console.log(entity.name);
  }
}
