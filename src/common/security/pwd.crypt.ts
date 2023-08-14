import * as bcrypt from 'bcrypt';
import { BadRequestException } from '@nestjs/common';

export class PWD {
  static async myHash(pwd: string) {
    if (!pwd) {
      throw new BadRequestException('NO PASSWORD USER INPUT !');
    }
    const salt = await bcrypt.genSalt(7);
    const password = await bcrypt.hash(pwd, salt);
    return { password, salt };
  }

  static async compare(enter: string, exists: string, salt: string) {
    const password = await bcrypt.hash(enter, salt);
    return exists === password;
  }
}
