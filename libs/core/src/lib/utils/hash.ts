import { hash as h, genSalt } from 'bcrypt';

export async function hash(value: string) {
  const salt = await genSalt(8);
  return await h(value, salt);
}
