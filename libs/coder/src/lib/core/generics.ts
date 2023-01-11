import { names } from '@nrwl/devkit';
import { Appendable, AppendableFields, Appendables } from './appendable';

export class Generic extends Appendable {
  override toCode(group?: string | undefined): string {
    const n = names(this.value);
    return `${n.className}`;
  }
}

export class Generics extends Appendables {
  override readonly appendables: Generic[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new Generic(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    if (this.appendables.length > 0) {
      return `<${this.appendables
        .map((e) => e.toCodeByGroup(group))
        .join(',')}>`;
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }
}
