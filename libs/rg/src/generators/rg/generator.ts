import { Tree } from '@nrwl/devkit';
import { RgGeneratorSchema } from './schema';

export default async function (tree: Tree, options: RgGeneratorSchema) {
  console.log(options);
}
