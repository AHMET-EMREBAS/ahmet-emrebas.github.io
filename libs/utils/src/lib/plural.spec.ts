import { plural } from './plural';
describe('Plural', () => {
  it('Plural', () => {
    expect(plural('some')).toBe('somes');
    expect(plural('go')).toBe('goes');
    expect(plural('category')).toBe('categories');
    expect(() => plural('')).toThrowError();
  });
});
