import { ToCode } from './to-code';

/**
 * Used for generics, implements and extends
 * @example
 * ````
 * Set([A, B ,C]) returns <TYPE> A, B, C
 * ````
 */
export class SetString implements ToCode {
  constructor(protected readonly set: Set<string>) {}
  toCode(): string {
    throw new Error('Not Implemented');
  }
}
