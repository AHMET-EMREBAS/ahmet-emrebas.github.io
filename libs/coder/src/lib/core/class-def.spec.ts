import { ClassDef } from './class-def';
import { exactText } from './exact-text';

describe('Cls Test', () => {
  it('should return basic class defination', () => {
    const code = new ClassDef({ name: 'A', classType: 'class' }).toCode();
    const expected = `export class A {}`;

    expect(exactText(code)).toBe(exactText(expected));
  });

  it('should return basic interface defination', () => {
    const code = new ClassDef({ name: 'A', classType: 'interface' }).toCode();
    const expected = `export interface A {}`;

    expect(exactText(code)).toBe(exactText(expected));
  });

  it('should return basic class with properties', () => {
    const code = new ClassDef({
      name: 'A',
      classType: 'class',
      properties: [{ name: 'name', type: 'string', optional: false }],
    }).toCode();
    const expected = `export class A { name:string; }`;

    expect(exactText(code)).toBe(exactText(expected));
  });

  it('should return class defination', () => {
    const code = exactText(`
    /**
     * hello
     * world
     */
    @Some({"name":"some"})
    export class A {
      @All({"name":"all"})
      name?: string;
    }
    `);
    const genCode = exactText(
      new ClassDef({
        name: 'A',
        classType: 'class',
        decorators: [{ name: 'Some', options: { name: 'some' } }],
        comments: [{ value: 'hello' }, { value: 'world' }],
        properties: [
          {
            name: 'name',
            type: 'string',
            decorators: [{ name: 'All', options: { name: 'all' } }],
          },
        ],
      }).toCode()
    );
    expect(genCode).toBe(code);
  });
});
