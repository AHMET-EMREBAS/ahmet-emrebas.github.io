import { SetString } from './set-string';

export class GenericSet extends SetString {
  override toCode(): string {
    if (this.set.size > 0) {
      return `<${[...this.set].join(',')}>`;
    }
    return '';
  }
}
