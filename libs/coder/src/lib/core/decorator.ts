import { ToCode } from './to-code';

export interface DecoratorFields<T = unknown> {
  name: string;
  options?: T | undefined;
  groups?: string[];
}

export class Decorator<T = unknown>
  extends ToCode
  implements DecoratorFields<T>
{
  readonly name: string;
  readonly options?: T | undefined;

  constructor(options: DecoratorFields<T>) {
    super(options.groups);
    this.name = options.name;
    this.options = options.options;
  }
  override toCode(): string {
    const o = this.options ? JSON.stringify(this.options) : '';
    return `@${this.name}(${o})`;
  }
}

export class Decorators extends ToCode {
  protected readonly decorators: Decorator[];

  constructor(decorators?: DecoratorFields<unknown>[]) {
    super([]);
    this.decorators = decorators?.map((e) => new Decorator(e)) || [];
  }

  override toCode(group?: string): string {
    if (this.decorators?.length > 0) {
      return this.decorators.map((e) => e.toCodeByGroup(group)).join('\n');
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    if (group) {
      return this.decorators.map((e) => e.toCodeByGroup(group)).join('\n');
    }
    return this.toCode();
  }

  add(options: DecoratorFields) {
    this.decorators.push(new Decorator(options));
  }
}
