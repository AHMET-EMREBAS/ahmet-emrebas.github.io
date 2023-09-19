import { mkdirSync } from 'fs';

export function mkdir(dirName: string) {
  mkdirSync(dirName, { recursive: true });
}


