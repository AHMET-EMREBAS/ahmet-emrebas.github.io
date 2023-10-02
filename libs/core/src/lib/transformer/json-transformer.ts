import { ValueTransformer } from 'typeorm';

export function JSONTransformer(): ValueTransformer {
  return {
    from: (value) => JSON.stringify(value || '{}'),
    to: (value) => JSON.parse(value || '{}'),
  };
}
