import { IsEmail } from 'class-validator';

export class NewsLetterDto {
  @IsEmail()
  readonly email: string;
}
