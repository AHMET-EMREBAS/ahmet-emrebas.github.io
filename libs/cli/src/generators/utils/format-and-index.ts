import { names, Tree } from '@nrwl/devkit';
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

export function addIndexFile(projectDir: string) {
  const generatedResources = readdirSync(projectDir);
  const modelImports = generatedResources
    .filter((e) => !e.startsWith('index'))
    .map((e) => `export * from './${names(e).fileName}';`)
    .join('\n');

  writeFileSync(join(projectDir, 'index.ts'), modelImports);
}
