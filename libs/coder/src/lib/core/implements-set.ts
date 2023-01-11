import { SetString } from './set-string';

export class ImplementsSet extends SetString {
  override toCode(): string {
    if (this.set.size > 0) {
      return `implements ${[...this.set].join(', ')}`;
    }
    return '';
  }
}
