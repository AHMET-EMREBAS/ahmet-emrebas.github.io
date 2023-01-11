import { Appendable, AppendableFields, Appendables } from './appendable';

export class Comment extends Appendable {
  override toCode(group?: string | undefined): string {
    return `* ${this.value}`;
  }
}

export class Comments extends Appendables {
  override readonly appendables: Comment[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new Comment(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    if (this.appendables.length > 0) {
      return `
      /**
       ${this.appendables.map((e) => e?.toCodeByGroup(group) || '').join('\n')}
       */`;
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }
}
