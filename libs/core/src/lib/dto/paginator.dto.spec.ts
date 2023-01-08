import { __plainToInstance } from '../shared';
import { PaginatorDto } from './paginator.dto';

describe('PaginatorDto', () => {
  it('should transform', () => {
    const obj = { take: '1', skip: '2', some: 'some' };
    const transformed = __plainToInstance(PaginatorDto, obj);

    expect(transformed['take']).toBe(1);
    expect(transformed['skip']).toBe(2);
    expect(transformed['some']).toBe(undefined);
  });
});
