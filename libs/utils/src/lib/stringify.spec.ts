import { clearSpace } from './clear-space';
import { stringify } from './stringify';
describe('Codify', () => {
  it('should convert object to printable', () => {
    const value = stringify({
      target: 'Category',
      value: 1,
      obj: { name: 'Name', some: 100 },
    });

    expect(clearSpace(value)).toBe(
      clearSpace(`{
        target: 'Category',
        value: 1,
        obj: { name: 'Name', some: 100, },
    }`)
    );
  });
});
