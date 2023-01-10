import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';
import { Model } from './model';

export async function loadModel(name: string): Promise<Model> {
  return (await load(
    readFileSync(join('resources', name + '.model.yaml')).toString()
  )) as Model;
}
