import { CommentSet } from './comment-set';
import { Decorators } from './decorator';

export class CommonDef<T> {
  readonly name: string;
  readonly decorators?: Decorators;
  readonly comments?: CommentSet;

  constructor(options: T & CommonDef<T>) {
    this.name = options.name;
    this.decorators = options.decorators;
    this.comments = options.comments;
  }
}
