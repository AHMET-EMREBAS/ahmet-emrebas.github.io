import { Cls } from './cls';
import { CommentSet } from './comment-set';
import { Decorator, Decorators } from './decorator';
import { exactText } from './exact-text';
import { Properties, Property } from './property';
describe('Cls Test', () => {
  it('should return basic class defination', () => {
    const code = new Cls({ name: 'A', classType: 'class' }).toCode();
    const expected = `export class A {}`;

    expect(exactText(code)).toBe(exactText(expected));
  });

  it('should return basic interface defination', () => {
    const code = new Cls({ name: 'A', classType: 'interface' }).toCode();
    const expected = `export interface A {}`;

    expect(exactText(code)).toBe(exactText(expected));
  });

  it('should return basic class with properties', () => {
    const code = new Cls({
      name: 'A',
      classType: 'class',
      properties: new Properties([
        new Property({ name: 'name', type: 'string', optional: false }),
      ]),
    }).toCode();
    const expected = `export class A { name:string }`;

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
      name?: string
    }
    `);
    const genCode = exactText(
      new Cls({
        name: 'A',
        classType: 'class',
        decorators: new Decorators([new Decorator('Some', { name: 'some' })]),
        comments: new CommentSet(new Set(['hello', 'world'])),
        properties: new Properties([
          new Property({
            name: 'name',
            type: 'string',
            decorators: new Decorators([new Decorator('All', { name: 'all' })]),
          }),
        ]),
      }).toCode()
    );
    expect(genCode).toBe(code);
  });
});
