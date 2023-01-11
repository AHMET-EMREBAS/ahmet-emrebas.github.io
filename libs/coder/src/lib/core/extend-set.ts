import { SetString } from './set-string';

export class ExtendSet extends SetString {
  override toCode(): string {
    if (this.set.size > 0) {
      return `extends ${[...this.set][0]}`;
    }
    return '';
  }
}
