import { clearSpace } from './clear-space';
describe('clearSpace', () => {
  it('should clear space', () => {
    expect(clearSpace('           some                 text\nsome')).toBe(
      'some text some'
    );
  });
});
