export function fileName(filename: string): string {
  const fname =
    filename.split('\\').pop()?.split('/').pop()?.split('.').shift() ||
    'unkown';

  console.log('[File name] getting file name ', fname);

  return fname;
}


