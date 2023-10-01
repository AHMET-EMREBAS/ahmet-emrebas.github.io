import { Model, PropertyOptions, RelationOptions, RelationType, RelationTypeClass } from './model';
import { names, uniq } from '@techbir/utils';
export type ModelVariant = 'dto' | 'entity' | 'graphql' | 'regular';
export type ModelType = 'class' | 'interface' | 'object' | 'type';

export class PropertyPrinter {
  constructor(
    private readonly modelType: ModelType,
    private readonly modelVariant: ModelVariant,
    private readonly property: PropertyOptions | RelationOptions
  ) {}

  protected type() {
    if (this.modelType === 'object') {
      return '';
    }

    if (this.property.type === 'object') {
      if (this.property.isArray) {
        return `${this.property.objectType}[]`;
      }
      return `${this.property.objectType}`;
    } else {
      if (this.property.isArray) {
        return `${this.property.type}[]`;
      }
      return `${this.property.type}`;
    }
  }

  decorators() {
    const { type } = this.property;
    const options = JSON.stringify(this.property);

    if (this.modelType === 'class') {
      if (this.modelVariant === 'dto') {
        return `@Property(${options})\n`;
      } else if (this.modelVariant === 'entity') {
        if (RelationTypeClass.isType(type as RelationType)) {
          return `@Relation(${options})`;
        } else {
          return `@Column(${options})\n`;
        }
      } else if (this.modelVariant === 'graphql') {
        if (RelationTypeClass.isType(type as RelationType)) {
          return `@Field(${options},${(this.property as RelationOptions).target})`;
        } else {
          if (this.property.type === 'object') {
            return `@Field(${options}, ${this.property.objectType})`;
          }
          return `@Field(${options})`;
        }
      }
    }
    return '';
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
    return `${this.decorators()}${this.accessors()}${name}${this.required()}${this.type()}${this.defaultValue()}`;
  }
}

export class ModelPrinter {
  private commonPackage = '@techbir/common';
  private corePackage = '@techbir/core';

  setCommonPackageName(pakcageName: string) {
    this.commonPackage = pakcageName;
  }

  setCorePackageName(pakcageName: string) {
    this.corePackage = pakcageName;
  }

  constructor(
    private readonly modelType: ModelType,
    private readonly modelVariant: ModelVariant,
    private readonly model: Model
  ) {}

  protected type() {
    const { name } = this.model;
    if (this.modelType === 'object') return `const ${name} = `;
    if (this.modelType === 'interface') return `interface ${name} `;
    if (this.modelType === 'class') return `class ${name}`;
    return '';
  }

  protected imports() {
    if (this.modelType === 'object') {
      return '';
    }
    let primaryImports = '';

    if (this.modelType === 'class') {
      if (this.modelVariant === 'dto') {
        primaryImports = `import { Dto, Property } form '${this.commonPackage}';`;
      } else if (this.modelVariant === 'entity') {
        primaryImports = `import { Entity, Column, Relation} from '${this.corePackage}';`;
      } else if (this.modelVariant === 'graphql') {
        primaryImports = `import { Field, Input } from '${this.corePackage}';`;
      }
    }

    const secondaryImports = uniq(
      Object.entries(this.model.relations || {}).map(([name, value]) => {
        return `import { ${value.target} } from '../../${
          names(value.target).fileName
        }';`;
      })
    ).join('\n');

    return [primaryImports, secondaryImports].join('\n');
  }

  protected properties() {
    return [
      ...Object.entries(this.model.properties || {}),
      ...Object.entries(this.model.relations || {}),
    ]
      .map(([name, value]) => {
        return new PropertyPrinter(this.modelType, this.modelVariant, {
          ...value,
          name,
        });
      })
      .map((e) => e.print())
      .join('\n');
  }

  protected decorators() {
    if (this.modelType === 'class') {
      if (this.modelVariant === 'entity') {
        return `@Entity()`;
      } else if (this.modelVariant === 'dto') {
        return '@Dto()';
      } else if (this.modelVariant === 'graphql') {
        return `@Input()`;
      }
    }
    return '';
  }

  print() {
    return `${this.imports()}${this.decorators()}\nexport ${this.type()} {\n${this.properties()}}`;
  }
}
