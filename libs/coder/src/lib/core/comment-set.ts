import { SetString } from './set-string';

/**
 *
 */
export class CommentSet extends SetString {
  override toCode(): string {
    return `
    /**
     ${[...this.set].map((e) => `* ${e}\n`).join('\n')}
     */
    `;
  }
}
