import { ToCode } from './to-code';

export interface AppendableFields<G = string[]> {
  value: string;
  groups?: G;
}
export class Appendable
  extends ToCode
  implements AppendableFields<Set<string>>
{
  readonly value: string;
  constructor(options: AppendableFields<string[]>) {
    super(options.groups);
    this.value = options.value;
  }

  addGroup(grp: string) {
    this.__groups.add(grp);
  }
}

export abstract class Appendables extends ToCode {
  readonly appendables: Appendable[];

  constructor(appendables: AppendableFields[]) {
    super([]);
    this.appendables = appendables.map((e) => new Appendable(e));
  }
  add(appandable: AppendableFields) {
    throw new Error('Not Implemented');
  }
}
