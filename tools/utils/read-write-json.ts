import { readFileSync, writeFileSync } from 'fs';
import { format } from 'prettier';

export function readJson(filepath: string) {
  return JSON.parse(readFileSync(filepath).toString());
}

export function writeJson(filepath: string, value: Record<string, any>) {
  const formatted = format(JSON.stringify(value), { parser: 'json' });
  writeFileSync(filepath, formatted);
}
