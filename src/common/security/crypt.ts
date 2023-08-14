import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';

export const encrypt = (str: any, key: any, iv: any) => {
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let value = cipher.update(str, 'utf8', 'base64');
  value += cipher.final('base64');
  return { value, authTag: cipher.getAuthTag().toString() };
};

export const decrypt = (value: any, key: any, iv: any, authTag: any) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  let str = decipher.update(value, 'base64', 'utf8');
  str += decipher.final('utf8');
  return str;
};
