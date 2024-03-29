import { PropertyPrinter, ModelPrinter } from './printer';
import { clearSpace } from '@techbir/utils';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { PropertyOptions } from './model';

describe('Property printer', () => {
  it('Should print regular properties', () => {
    const property: PropertyOptions = {
      name: 'name',
      type: 'string',
    };

    expect(new PropertyPrinter('interface', 'regular', property).print()).toBe(
      'name?:string;'
    );
    expect(new PropertyPrinter('class', 'regular', property).print()).toBe(
      'name?:string;'
    );
    expect(new PropertyPrinter('type', 'regular', property).print()).toBe(
      'name?:string;'
    );
    expect(new PropertyPrinter('object', 'regular', property).print()).toBe(
      'name:undefined,'
    );
  });

  it('should print dto and entity properties', () => {
    const property: PropertyOptions = {
      name: 'name',
      type: 'string',
    };

    expect(new PropertyPrinter('class', 'entity', property).print()).toBe(
      `@Column({"name":"name","type":"string"})\nname?:string;`
    );
    expect(new PropertyPrinter('class', 'dto', property).print()).toBe(
      `@Property({"name":"name","type":"string"})\nname?:string;`
    );
  });

  it('should print model', () => {
    const result = new ModelPrinter('class', 'entity', {
      name: 'Product',
      properties: { name: { type: 'string', name: 'name' } },
    }).print();

    expect(clearSpace(result)).toBe(
      clearSpace(
        `import { Entity, Column, Relation} from '@techbir/core';\n@Entity()\nexport class Product {\n@Column({\"type\":\"string\",\"name\":\"name\"})\nname?:string;}`
      )
    );
  });
});
