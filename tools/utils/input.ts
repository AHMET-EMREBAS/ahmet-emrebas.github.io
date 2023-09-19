import { argv } from 'process';

/**
 * @param index 1..n
 * @returns process.argv
 */
export function input(
  index: number,
  defaultValue: string | undefined = undefined
): string | undefined {
  return argv[index + 1] || defaultValue;
}
