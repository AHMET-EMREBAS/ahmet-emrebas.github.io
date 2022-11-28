import { formatFiles, names, Tree } from '@nrwl/devkit';
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export async function formatAndIndex(tree: Tree, projectDir: string) {
  const generatedResources = readdirSync(projectDir);
  const modelImports = generatedResources
    .filter((e) => !e.startsWith('index'))
    .map((e) => `export * from './${names(e).fileName}';`)
    .join('\n');

  writeFileSync(join(projectDir, 'index.ts'), modelImports);
  await formatFiles(tree);
}
