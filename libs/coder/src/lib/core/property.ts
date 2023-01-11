import { AppendableFields } from './appendable';
import { Comments } from './comments';
import { Decorator, DecoratorFields, Decorators } from './decorator';
import { ToCode } from './to-code';

export interface PropertyFields<
  Ds = DecoratorFields[],
  Cs = AppendableFields[]
> {
  readonly type: string;
  readonly name: string;
  readonly decorators?: Ds;
  readonly comments?: Cs;
  readonly optional?: boolean;
  readonly groups?: string[];
}

export class Property
  extends ToCode
  implements PropertyFields<Decorators, Comments>
{
  readonly name: string;
  readonly type: string;
  readonly optional?: boolean | undefined;
  readonly groups?: string[];
  readonly decorators?: Decorators | undefined;
  readonly comments?: Comments | undefined;

  constructor(
    options: PropertyFields<DecoratorFields<unknown>[], AppendableFields[]>
  ) {
    super(options.groups);
    this.groups = options.groups;
    this.name = options.name;
    this.decorators = new Decorators(
      options.decorators?.map((e) => new Decorator(e)) || []
    );
    this.type = options.type;
    this.optional = options.optional;
    this.comments = new Comments(options.comments);
  }
  override toCode(group?: string): string {
    return `
    ${this.comments?.toCodeByGroup(group) || ''}
    ${this.decorators?.toCodeByGroup(group) || ''}
    ${this.name}${this.optional === false ? '' : '?'}:${this.type};
    `;
  }
}

export class Properties extends ToCode {
  protected readonly properties: Property[];
  constructor(
    properties?: PropertyFields<DecoratorFields[], AppendableFields[]>[]
  ) {
    super();
    this.properties = properties?.map((e) => new Property(e)) || [];
  }

  override toCode(group?: string): string {
    if (this.properties.length > 0) {
      return this.properties.map((e) => e.toCodeByGroup(group)).join('\n');
    }
    return '';
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }

  add(options: PropertyFields) {
    this.properties.push(new Property(options));
  }
}
