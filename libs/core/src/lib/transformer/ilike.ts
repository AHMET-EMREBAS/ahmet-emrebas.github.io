import { Transform } from 'class-transformer';
import { ILike, LessThan, MoreThan } from 'typeorm';

export function ILikeTransformer(searchables: string[]) {
  return Transform(({ obj }) => {
    const queries = [];

    if (obj.search) {
      for (const s of searchables) {
        queries.push({ [s]: ILike(`%${obj.search}%`) });
      }
    }

    if (obj.before) {
      queries.push({ createdAt: LessThan(new Date(obj.before)) });
    }

    if (obj.after) {
      queries.push({ createdAt: MoreThan(new Date(obj.after)) });
    }

    return queries;
  });
}
