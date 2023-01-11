import { Appendable, AppendableFields, Appendables } from './appendable';

export class ClassType extends Appendable {
  override toCode(group?: string | undefined): string {
    return this.value;
  }
}

export class ClassTypes extends Appendables {
  override readonly appendables: ClassType[];

  constructor(appendables?: AppendableFields[]) {
    super([]);
    this.appendables = appendables?.map((e) => new ClassType(e)) || [];
  }

  override toCode(group?: string | undefined): string {
    if (this.appendables.length > 0) {
      return this.appendables.map((e) => e.toCodeByGroup(group)).join(' ');
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }
  override add(appandable: AppendableFields<string[]>): void {
    this.appendables.push(new ClassType(appandable));
  }
}
