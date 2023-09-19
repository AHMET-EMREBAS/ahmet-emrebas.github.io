import { forEachFile } from './for-each-file';

export function templatify(rootDir: string) {
  forEachFile(rootDir, (filePath: string) => {
    console.log(filePath);
  });
}
