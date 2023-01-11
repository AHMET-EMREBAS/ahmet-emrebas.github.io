import { exactText } from './exact-text';
import { Properties, Property } from './property';

describe('Property', () => {
  it('should return basic property', () => {
    const code = exactText(
      new Property({
        name: 'name',
        type: 'string',
      }).toCode()
    );

    const exp = 'name?:string;';

    expect(code).toBe(exp);
  });

  it('should return complex properties', () => {
    const code = new Properties([
      {
        name: 'name',
        type: 'string',
        comments: [{ value: 'Some' }, { value: 'At' }],
        decorators: [{ name: 'Some', options: { name: 'some' } }],
        optional: false,
      },
      {
        name: 'some',
        type: 'number',
        comments: [{ value: 'Some' }, { value: 'At' }],
        decorators: [{ name: 'Some', options: { name: 'some' } }],
        optional: false,
      },
    ]).toCode();

    const exp = `
    /**
     * Some
     * At
     */
    @Some({"name":"some"})
    name:string;
    /**
     * Some
     * At
     */
    @Some({"name":"some"})
    some:number;
    `;

    expect(exactText(code)).toBe(exactText(exp));
  });
});
