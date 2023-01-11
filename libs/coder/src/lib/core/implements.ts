import { names } from '@nrwl/devkit';
import { Appendable, AppendableFields, Appendables } from './appendable';

export class Implement extends Appendable {
  override toCode(group?: string | undefined): string {
    const n = names(this.value);
    return `${n.className}`;
  }
}

export class Implements extends Appendables {
  override readonly appendables: Implement[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new Implement(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    if (this.appendables.length > 0) {
      return `implements ${this.appendables
        .map((e) => e.toCodeByGroup(group))
        .join(',')}`;
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }

  override add(appandable: AppendableFields<string[]>): void {
    if (this.appendables.find((e) => e.value == appandable.value)) {
      return;
    }
    this.appendables.push(new Implement(appandable));
  }
}
