import { CommonDef } from './common-def';
import { ToCode } from './to-code';

export class PropertyDef<
  T extends string = string
> extends CommonDef<PropertyDef> {
  readonly type: T;
  readonly optional?: boolean;
  constructor(options: PropertyDef<T>) {
    super(options);
    this.type = options.type;
    this.optional = options.optional;
  }
}
export class Property<T extends string = string>
  extends PropertyDef<T>
  implements ToCode
{
  toCode(): string {
    return `
    ${this.decorators?.toCode() || ''}
    ${this.name}${this.optional === false ? '' : '?'}:${this.type}
    `;
  }
}

export class Properties implements ToCode {
  constructor(readonly properties: Property[]) {}

  toCode(): string {
    if (this.properties.length > 0) {
      return this.properties.map((e) => e.toCode()).join('\n');
    }
    return '';
  }
}
