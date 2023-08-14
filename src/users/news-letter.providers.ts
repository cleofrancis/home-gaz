import { Connection } from 'mongoose';
import { NewsLetterSchema } from './schemas/news-letter.schema';

export const newsLettersProviders = [
  {
    provide: 'NEWSLETTER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Newsletter', NewsLetterSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
