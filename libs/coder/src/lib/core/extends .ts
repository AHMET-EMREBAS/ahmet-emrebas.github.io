import { names } from '@nrwl/devkit';
import { Appendable, AppendableFields, Appendables } from './appendable';

export class Extend extends Appendable {
  override toCode(group?: string | undefined): string {
    const n = names(this.value);
    return `${n.className}`;
  }
}

export class Extends extends Appendables {
  override readonly appendables: Extend[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new Extend(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    if (this.appendables.length > 0) {
      return `extends ${this.appendables
        .map((e) => e.toCodeByGroup(group))
        .join(',')}`;
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }
}
