import { names } from '@nrwl/devkit';
import { Appendable, AppendableFields, Appendables } from './appendable';

export class Import extends Appendable {
  override toCode(group?: string | undefined): string {
    const n = names(this.value);
    return `import {${n.className})} from '../../${n.propertyName}`;
  }
}

export class Imports extends Appendables {
  override readonly appendables: Import[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new Import(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    return this.appendables.map((e) => e.toCodeByGroup(group)).join('\n');
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }

  override add(appandable: AppendableFields<string[]>): void {
    if (this.appendables.find((e) => e.value == appandable.value)) {
      return;
    }
    this.appendables.push(new Import(appandable));
  }
}
