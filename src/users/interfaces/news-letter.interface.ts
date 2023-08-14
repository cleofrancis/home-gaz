import { Document } from 'mongoose';

export interface NewsLetter extends Document {
  readonly email: string;
}
