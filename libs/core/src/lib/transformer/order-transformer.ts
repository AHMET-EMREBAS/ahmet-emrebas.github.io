import { Transform } from 'class-transformer';

export function OrderTransformer() {
  return Transform(({ obj }) => {
    if (obj.orderBy && obj.orderDir) {
      return {
        [obj.orderBy]: obj.orderDir,
      };
    }
    return undefined;
  });
}
