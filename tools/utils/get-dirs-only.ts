import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export function getDirsOnly(rootDir: string) {
  return readdirSync(rootDir).filter((e) => {
    return statSync(join(rootDir, e)).isDirectory();
  });
}
