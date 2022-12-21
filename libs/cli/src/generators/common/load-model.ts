import { Tree } from '@nrwl/devkit';
import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { ModelSchema } from './model-schema';

export function loadModel(tree: Tree, name: string) {
  return load(
    readFileSync(
      join(tree.root, 'source', 'models', name + '.model.yaml')
    ).toString()
  ) as ModelSchema;
}
