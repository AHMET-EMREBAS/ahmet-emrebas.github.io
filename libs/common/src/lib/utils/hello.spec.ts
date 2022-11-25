import { hello } from './hello';

describe('Hello', () => {
  it('should say hello', () => {
    expect(hello()).toBe('Hello');
  });
});
