import { formatFiles, generateFiles, names, Tree } from '@nx/devkit';
import * as path from 'path';
import { LoggerGeneratorSchema } from './schema';

export async function loggerGenerator(
  tree: Tree,
  options: LoggerGeneratorSchema
) {
  const projectRoot = `libs/${options.name}/src/lib/api`;
  const __names = names(options.name);

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...__names,
  });
  await formatFiles(tree);
}

export default loggerGenerator;
