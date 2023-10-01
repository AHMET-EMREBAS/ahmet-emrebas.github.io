import { Property } from './types';
import { PropertyPrinter } from './printer';
describe('Property printer', () => {
  it('Should print property', () => {
    const property: Property = {
      name: 'name',
      type: 'string',
    };

    expect(new PropertyPrinter('interface', property).print()).toBe('name?:string;');
    expect(new PropertyPrinter('class', property).print()).toBe('name?:string;');
    expect(new PropertyPrinter('type', property).print()).toBe('name?:string;');
    expect(new PropertyPrinter('object', property).print()).toBe('name:undefined,');
  });
});
