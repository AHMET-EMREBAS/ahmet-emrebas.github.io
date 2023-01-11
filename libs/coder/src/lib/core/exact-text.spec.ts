import { exactText } from './exact-text';

describe('ExactText', () => {
  it('should remove all space and new lines', () => {
    expect(exactText('some   \n other')).toBe('someother');
  });
});
