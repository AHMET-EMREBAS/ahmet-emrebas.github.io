import { hash as h, compare as c, genSalt } from 'bcrypt';

export async function hash(value: string) {
  const salt = await genSalt(8);
  return await h(value, salt);
}

export async function compare(value: string, encrypted: string) {
  return await c(value, encrypted);
}
