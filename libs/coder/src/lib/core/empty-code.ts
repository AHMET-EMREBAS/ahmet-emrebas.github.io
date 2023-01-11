import { ToCode } from './to-code';

export class EmptyCode implements ToCode {
  toCode(): string {
    return '';
  }
}

/**
 * Empty code
 */
export const EC = new EmptyCode();
