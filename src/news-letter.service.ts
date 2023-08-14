import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { NewsLetterDto } from './users/dto/news-letter.dto';
import { NewsLetter } from './users/interfaces/news-letter.interface';

@Injectable()
export class NewsLettersService {
  constructor(
    @Inject('NEWSLETTER_MODEL')
    private newsletterModel: Model<NewsLetter>,
  ) {}

  subscribe(newsLetterDto: NewsLetterDto): Promise<NewsLetter> {
    const addedEmail = new this.newsletterModel(newsLetterDto);
    return addedEmail.save();
  }

  unsubscribe(newsLetterDto: NewsLetterDto) {
    return 'This action removes a user to newsletter';
  }

  async findAll(): Promise<NewsLetter[]> {
    return this.newsletterModel.find().exec();
  }
}
