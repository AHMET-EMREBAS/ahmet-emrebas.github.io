import { Matcher } from './matcher';

describe('Matcher test', () => {
  it.each`
    value | result
    ${Matcher.init()
  .switchMatchValue('a')
  .matchValue('a', () => 100)
  .getFirst()} | ${100}
    ${Matcher.init()
  .switchMatchValue<'a' | 'b' | 'c', string>('a')
  .matchValue('a', (value) => 'yes')
  .matchValue('b', (value) => 'yes')
  .matchValue('c', (value) => 'yes')
  .switchNotNull()
  .matchNotNull('end', (value) => value)
  .getAll()
  ?.join('')} | ${'yesend'}
    ${Matcher.init()
  .switchNotNull()
  .matchNotNull('some', (value) => value)
  .matchNotNull('other', (value) => value)
  .matchNotNull(-1, (value) => value)
  .matchNotNull(null, (value) => value)
  .matchNotNull(undefined, (value) => value)
  .getAll()
  ?.join('')} | ${'someother-1'}
  `('$value should be $result', ({ value, result }) => {
    expect(value).toBe(result);
  });
});
