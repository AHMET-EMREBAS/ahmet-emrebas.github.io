import { CommonDef } from './common-def';
import { ExtendSet } from './extend-set';
import { GenericSet } from './generic-set';
import { ImplementsSet } from './implements-set';
import { Properties } from './property';
import { ToCode } from './to-code';

export class ClsDef extends CommonDef<ClsDef> {
  readonly classType: 'interface' | 'class';
  readonly extends?: ExtendSet;
  readonly implements?: ImplementsSet;
  readonly properties?: Properties;
  readonly generics?: GenericSet;
  constructor(options: ClsDef) {
    super(options);
    this.classType = options.classType;
    this.extends = options.extends;
    this.implements = options.implements;
    this.properties = options.properties;
    this.generics = options.generics;
  }
}

export class Cls extends ClsDef implements ToCode {
  constructor(options: ClsDef) {
    super(options);
  }

  toCode(): string {
    return `
    ${this.comments?.toCode() || ''}
    ${this.decorators?.toCode() || ''}
    export ${this.classType} ${this.name} ${this.extends?.toCode() || ''} ${
      this.implements?.toCode() || ''
    } {

      ${this.properties?.toCode() || ''}
    }
    `;
  }
}
