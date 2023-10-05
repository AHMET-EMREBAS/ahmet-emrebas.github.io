import {
  Model,
  PropertyOptions,
  RelationOptions,
  RelationType,
  RelationTypeClass,
} from './model';
import { names, stringify, uniq } from '@techbir/utils';
export type ModelVariant =
  | 'dto'
  | 'entity'
  | 'graphql'
  | 'graphql-input'
  | 'regular'
  | 'client';

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
    } else if (RelationTypeClass.isType(this.property.type as RelationType)) {
      if (this.modelVariant === 'graphql-input') {
        return this.property.type.endsWith('Many') ? `IDInput[]` : 'IDInput';
      }
      if (this.modelVariant === 'dto') {
        return this.property.type.endsWith('Many') ? 'IDDto[]' : 'IDDto';
      }
      if (this.property.type.endsWith('Many')) {
        return `${(this.property as RelationOptions).target}[]`;
      } else {
        return `${(this.property as RelationOptions).target}`;
      }
    } else {
      return `${this.property.type}`;
    }
  }

  formField() {
    const { name, inputType, icon, label, required } = this
      .property as PropertyOptions;
    return `<tb-input i18n-label inputType="${inputType}" name="${name}" label="${label}" icon="${icon}" autocomplete="off" required="${required}"></tb-input>`;
  }

  formProperty() {
    return `
    @Validations(${stringify(this.property)})
    ${this.property.name}?:${this.property.type};
    `;
  }

  protected decorators() {
    const { type } = { ...this.property };
    const options = stringify({ ...this.property });

    if (this.modelType === 'class') {
      if (this.modelVariant === 'dto') {
        if (RelationTypeClass.isType(type as RelationType)) {
          const __options = { ...this.property };
          (__options as RelationOptions).target = 'IDDto';
          return `@Property(${stringify(__options)})`;
        } else {
          return `@Property(${options})\n`;
        }
      } else if (this.modelVariant === 'entity') {
        if (RelationTypeClass.isType(type as RelationType)) {
          return `@Relation(${options})`;
        } else {
          return `@Column(${options})\n`;
        }
      } else if (
        this.modelVariant === 'graphql' ||
        this.modelVariant === 'graphql-input'
      ) {
        if (RelationTypeClass.isType(type as RelationType)) {
          if (this.modelVariant === 'graphql-input') {
            const __options = { ...this.property };
            (__options as RelationOptions).target = 'IDInput';
            return `@Field(${stringify(__options)})`;
          } else {
            return `@Field(${options})`;
          }
        } else {
          if (this.property.type === 'object') {
            return `@Field(${options})`;
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

    if (this.modelType === 'interface') {
      return '?:';
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
    const NAMES = names(this.model.name);
    if (this.modelType === 'object') return `const ${NAMES.constName} = `;
    if (this.modelType === 'interface') return `interface ${NAMES.className} `;
    if (this.modelType === 'class') {
      if (this.modelVariant === 'entity') {
        return `class ${NAMES.className} extends BaseEntity`;
      } else if (this.modelVariant === 'dto') {
        return `class Create${NAMES.className}Dto`;
      } else if (this.modelVariant === 'graphql') {
        return `class ${NAMES.className} extends BaseInput`;
      } else if (this.modelVariant === 'graphql-input') {
        return `class Create${NAMES.className}Input`;
      }
    }
    if (this.modelType === 'type') return `type ${NAMES.className}`;
    return '';
  }

  protected imports() {
    if (this.modelType === 'object') {
      return '';
    }
    let primaryImports = '';

    if (this.modelType === 'class') {
      if (this.modelVariant === 'dto') {
        primaryImports = `import { Dto, Property, IDDto } from '${this.corePackage}';`;
      } else if (this.modelVariant === 'entity') {
        primaryImports = `import { Entity, Column, Relation, BaseEntity } from '${this.corePackage}';`;
      } else if (this.modelVariant === 'graphql') {
        primaryImports = `import { Field, ObjectType,Input, BaseInput } from '${this.corePackage}';`;
      } else if (this.modelVariant === 'graphql-input') {
        primaryImports = `import { Field, Input, IDInput  } from '${this.corePackage}';`;
      }
    }

    primaryImports += `\nimport { PartialType } from '@nestjs/graphql';`;

    const secondaryImports = uniq(
      Object.entries(this.model.relations || {}).map(([name, value]) => {
        return `import { ${value.target} } from './../${
          names(value.target).fileName
        }';`;
      })
    ).join('\n');

    return [primaryImports, secondaryImports].join('\n');
  }

  properties() {
    const list = [];

    if (this.modelType === 'interface' && this.modelVariant === 'client') {
      if (this.model.properties) {
        this.model.properties['id'] = {
          type: 'number',
          name: 'id',
        };
        list.push(...Object.entries(this.model.properties || {}));
      }
    } else {
      list.push(
        ...Object.entries(this.model.properties || {}),
        ...Object.entries(this.model.relations || {})
      );
    }

    return list
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
        return `@ObjectType()`;
      } else if (this.modelVariant === 'graphql-input') {
        return `@Input()`;
      }
    }
    return '';
  }

  formFields() {
    return [...Object.entries(this.model.properties || {})]
      .map(([name, value]) => {
        return new PropertyPrinter(this.modelType, this.modelVariant, {
          ...value,
          name,
        });
      })
      .map((e) => e.formField())
      .join('\n');
  }

  formProperties() {
    return [...Object.entries(this.model.properties || {})]
      .map(([name, value]) => {
        return new PropertyPrinter(this.modelType, this.modelVariant, {
          ...value,
          name,
        });
      })
      .map((e) => e.formProperty())
      .join('\n');
  }

  print() {
    return `${this.imports()}${this.decorators()}\nexport ${this.type()} {\n${this.properties()}}`;
  }
}
