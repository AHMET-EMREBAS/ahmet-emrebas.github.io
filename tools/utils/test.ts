import { input } from './input';
import { green, white, red } from 'colors';

const testCases: [string, () => void][] = [];

export function test(description: string, handler: () => void) {
  testCases.push([description, handler]);
}

const passed = (message: string) =>
  console.log(green('✅ passed ' + white(message)));

const failed = (message: string) =>
  console.log(red('🤣 failed ' + white(message)));

export function describe(name: string, init: () => void) {
  if (input(1) === 'test') {
    init();
    for (const t of testCases) {
      const description = t[0];
      const testhandler = t[1];
      try {
        testhandler();
        passed(description);
      } catch (err) {
        failed(description);
        failed(err + '');
      }
    }
  }
}
