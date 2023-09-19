import { readdirSync, statSync } from 'fs';
import { join } from 'path';

export function forEachFile(
  rootDir: string,
  handler: (filePath: string) => void
) {
  const dirs = readdirSync(rootDir);

  for (const dir of dirs) {
    const filePath = join(rootDir, dir);
    const stat = statSync(filePath);
    if (stat.isFile()) {
      handler(filePath);
    } else {
      forEachFile(filePath, handler);
    }
  }
}
