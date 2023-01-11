import { AppendableFields } from './appendable';
import { ClassDef } from './class-def';
import { DecoratorFields } from './decorator';
import { PropertyFields } from './property';

export class ClassBuilder {
  private constructor(private readonly __instance: ClassDef) {}

  static init() {
    return new ClassBuilder(new ClassDef());
  }

  addClasName(name: string, type: string, group: string) {
    this.__instance.classNames?.add({
      value: name,
      groups: [group],
    });
    this.__instance.classTypes?.add({
      value: type,
      groups: [group],
    });
  }

  addProperty(options: PropertyFields) {
    this.__instance.properties?.add(options);
    return this;
  }

  addDecorator(options: DecoratorFields) {
    this.__instance.decorators?.add(options);
    return this;
  }

  addImports(imp: AppendableFields) {
    this.__instance.imports?.add(imp);
    return this;
  }

  addComment(cmt: AppendableFields) {
    this.__instance.comments?.add(cmt);
    return this;
  }

  addGeneric(gener: AppendableFields) {
    this.__instance.generics?.add(gener);
    return this;
  }

  addImplements(impl: AppendableFields) {
    this.__instance.implements?.add(impl);
    return this;
  }

  addExtends(ext: AppendableFields) {
    this.__instance.extends?.add(ext);
    return this;
  }

  toString(group?: string) {
    return this.__instance.toCodeByGroup(group);
  }
}
