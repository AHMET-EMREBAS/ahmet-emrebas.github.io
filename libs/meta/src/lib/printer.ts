import { Model, Property, Relation } from './types';

export class PropertyPrinter {
  constructor(
    private readonly modelType: ModelType,
    private readonly property: Property | Relation
  ) {}

  protected type() {
    if (this.modelType === 'object') {
      return '';
    }
    return this.property.type === 'object'
      ? this.property.objectType
      : this.property.type;
  }

  protected accessors() {
    if (
      this.modelType === 'object' ||
      ((this.modelType === 'interface' || this.modelType === 'type') &&
        (this.property.static || this.property.private))
    ) {
      return '';
    }

    const __accesssor = '';

    if (this.property.private) __accesssor + ' private ';
    if (this.property.readonly) __accesssor + ' readonly ';
    if (this.property.static) __accesssor + ' static ';

    return '';
  }

  protected required() {
    if (this.modelType === 'object') {
      return ':';
    }

    return this.property.required === true ? '!:' : '?:';
  }

  protected defaultValue() {
    if (this.modelType === 'interface') {
      return ';';
    }
    if (this.modelType === 'object') {
      return this.property.defaultValue + ',';
    }

    return this.property.defaultValue != undefined
      ? `= ${this.property.defaultValue};`
      : ';';
  }

  print() {
    const { name } = this.property;
    return `${this.accessors()}${name}${this.required()}${this.type()}${this.defaultValue()}`;
  }
}

export type ModelType = 'class' | 'interface' | 'object' | 'type';

export class ModelPrinter {
  constructor(
    private readonly modelType: ModelType,
    private readonly model: Model
  ) {}

  protected type() {
    const { name } = this.model;
    if (this.modelType === 'object') return `const ${name} = `;
    if (this.modelType === 'interface') return `interface ${name} `;
    if (this.modelType === 'class') return `class ${name}`;
    return '';
  }

  protected properties() {
    return Object.entries(this.model.properties || {})
      .map(([name, value]) => {
        return new PropertyPrinter(this.modelType, { ...value, name });
      })
      .map((e) => e.print())
      .join('\n');
  }

  print() {
    return ` 
    export ${this.type} { 
        
        ${this.properties()}

    }
    `;
  }
}
