import { Transform } from 'class-transformer';
import { FindOperator, ILike } from 'typeorm';

export function QueryStringTransformer(searchables: string[]) {
  return Transform((value) => {
    const queries: Record<string, FindOperator<any>> = {};

    for (const s of searchables) {
      queries[s] = ILike(`%${value}%`);
    }
    return queries;
  });
}
