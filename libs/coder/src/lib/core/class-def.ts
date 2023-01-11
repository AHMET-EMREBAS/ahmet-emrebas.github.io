import { AppendableFields, Appendables } from './appendable';
import { Comments } from './comments';
import { DecoratorFields, Decorators } from './decorator';
import { Extends } from './extends ';
import { Generics } from './generics';
import { Implements } from './implements';
import { Imports } from './imports';

import { Properties, PropertyFields } from './property';
import { ToCode } from './to-code';

export interface ClassFields<
  Decs = DecoratorFields[],
  Props = PropertyFields[],
  Appends = AppendableFields[]
> {
  name: string;
  decorators?: Decs;
  properties?: Props;
  classType: string;
  comments?: Appends;
  imports?: Appends;
  extends?: Appends;
  implements?: Appends;
  generics?: Appends;
}

export class ClassDef
  extends ToCode
  implements ClassFields<Decorators, Properties, Appendables>
{
  readonly name: string;
  readonly decorators?: Decorators | undefined;
  readonly properties?: Properties | undefined;
  readonly comments?: Comments | undefined;
  readonly classType: string;
  readonly imports?: Imports | undefined;
  readonly extends?: Extends | undefined;
  readonly implements?: Implements | undefined;
  readonly generics?: Generics | undefined;

  constructor(
    options: ClassFields<
      DecoratorFields[],
      PropertyFields<DecoratorFields[], AppendableFields[]>[],
      AppendableFields[]
    >
  ) {
    super([]);
    this.name = options?.name;
    this.classType = options?.classType;
    this.decorators = new Decorators(options?.decorators);
    this.comments = new Comments(options.comments);
    this.properties = new Properties(options?.properties);
    this.imports = new Imports(options?.imports);
    this.extends = new Extends(options?.extends);
    this.implements = new Implements(options?.implements);
    this.generics = new Generics(options?.generics);
  }

  override toCode(group?: string): string {
    return `
    ${this.imports?.toCodeByGroup(group) || ''}
    ${this.comments?.toCodeByGroup(group) || ''}
    ${this.decorators?.toCodeByGroup(group) || ''}
    export ${this.classType} ${this.name} ${this.generics?.toCodeByGroup(
      group
    )} ${this.extends?.toCodeByGroup(group) || ''} ${
      this.implements?.toCodeByGroup(group) || ''
    } {
      ${this.properties?.toCodeByGroup(group) || ''}
    }
    `;
  }

  override toCodeByGroup(group?: string | undefined): string {
    return this.toCode(group);
  }
}
