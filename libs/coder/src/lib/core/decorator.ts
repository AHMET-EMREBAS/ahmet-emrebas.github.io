import { ToCode } from './to-code';

export class Decorator<T = unknown> implements ToCode {
  constructor(public readonly name: string, public readonly options?: T) {}
  toCode(): string {
    return `@${this.name}(${JSON.stringify(this.options)})`;
  }
}

export class Decorators implements ToCode {
  constructor(readonly decorators: Decorator[]) {}

  toCode(): string {
    if (this.decorators?.length > 0) {
      return this.decorators.map((e) => e.toCode()).join('\n');
    }
    return '';
  }
}
