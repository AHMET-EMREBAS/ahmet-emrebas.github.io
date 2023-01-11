import { Decorator } from './decorator';
import { exactText } from './exact-text';

describe('Decorator', () => {
  it('should return decorator', () => {
    const code = exactText(
      new Decorator({ name: 'Some', options: { name: 'some' } }).toCode()
    );
    const exp = exactText(`@Some({"name":"some"})`);
    expect(code).toBe(exp);
  });

  it('should print empty if not in the group', () => {
    const d = new Decorator({ name: 'Some', groups: ['some'] });

    const code = exactText(d.toCodeByGroup('other'));
    const code1 = exactText(d.toCodeByGroup('some'));

    expect(code).toBe('');
    expect(code1).toBe('@Some()');
  });
});
