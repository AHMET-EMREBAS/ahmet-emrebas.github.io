import { _GREEN, _RED, _WHITE } from './colors';
import { input } from './input';

const testCases: [string, () => void][] = [];

export function test(description: string, handler: () => void) {
  testCases.push([description, handler]);
}

const passed = (message: string) =>
  console.log(_GREEN('✅ passed ' + _WHITE(message)));

const failed = (message: string) =>
  console.log(_RED('🤣 failed ' + _WHITE(message)));

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
