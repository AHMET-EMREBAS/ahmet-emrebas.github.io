import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ServerLoggerGeneratorSchema } from './schema';

export async function serverLoggerGenerator(
  tree: Tree,
  options: ServerLoggerGeneratorSchema
) {
  const PROJECT_ROOT = `libs/${options.name}`;
  const API_ROOT = `libs/${options.name}/src/lib/api`;
  const __names = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), API_ROOT, {
    ...__names,
  });
  await formatFiles(tree);
}

export default serverLoggerGenerator;
