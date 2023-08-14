import { compare, hash } from 'bcrypt';
import { BCRYPT_WORK_FACTOR } from 'src/config/auth';

export const matchesPassword = async (p1: string, p2: string) => {
  return await compare(p1, p2);
};

export const hashPassword = async (p: string) => {
  return await hash(p, BCRYPT_WORK_FACTOR);
};
