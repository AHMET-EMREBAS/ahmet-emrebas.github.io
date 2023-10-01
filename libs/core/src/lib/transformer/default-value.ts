import { Transform } from 'class-transformer';

export function DefaultValueTransformer(defaultValue: any) {
  return Transform(({ value }) => {
    return value == undefined ? defaultValue : value;
  });
}
