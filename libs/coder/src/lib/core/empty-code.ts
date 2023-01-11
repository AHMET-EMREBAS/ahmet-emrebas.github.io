import { ToCode } from './to-code';

export class EmptyCode extends ToCode {
  override toCode(group?: string): string {
    return '';
  }
}
