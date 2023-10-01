import { Property } from './types';
import { PropertyPrinter } from './printer';
describe('Property printer', () => {
  it('Should print regular properties', () => {
    const property: Property = {
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
    const property: Property = {
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
});
