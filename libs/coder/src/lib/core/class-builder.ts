import { ClassDef } from './class-def';
import { DecoratorFields } from './decorator';
import { PropertyFields } from './property';

export class ClassBuilder {
  private constructor(private readonly __instance: ClassDef) {}
  private static init(name: string, classType: string) {
    return new ClassBuilder(new ClassDef({ name, classType }));
  }

  static newClass(name: string) {
    return this.init(name, 'class');
  }

  static newInterface(name: string) {
    return this.init(name, 'interface');
  }

  addProperty(options: PropertyFields) {
    this.__instance.properties?.add(options);
    return this;
  }

  addDecorator(options: DecoratorFields) {
    this.__instance.decorators?.add(options);
    return this;
  }

  addImports(imp: string) {
    this.__instance.imports?.add(imp);
    return this;
  }

  addComment(cmt: string) {
    this.__instance.comments?.add(cmt);
    return this;
  }

  addGeneric(gener: string) {
    this.__instance.generics?.add(gener);
    return this;
  }

  addImplements(impl: string) {
    this.__instance.implements?.add(impl);
    return this;
  }

  addExtends(ext: string) {
    this.__instance.extends?.add(ext);
    return this;
  }

  toString(group?: string) {
    return this.__instance.toCodeByGroup(group);
  }
}
