import { compare as c } from 'bcrypt';

export async function compare(value: string, encrypted: string) {
  return await c(value, encrypted);
}
