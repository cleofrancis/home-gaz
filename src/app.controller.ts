import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NewsLettersService } from './news-letter.service';
import { NewsLetterDto } from './users/dto/news-letter.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly newsLettersService: NewsLettersService,
  ) {}

  @Post('subscribe')
  subscribe(@Body() newsLetterDto: NewsLetterDto) {
    return this.newsLettersService.subscribe(newsLetterDto);
  }

  @Post('unsubscribe')
  unsubscribe(@Body() newsLetterDto: NewsLetterDto) {
    return this.newsLettersService.unsubscribe(newsLetterDto);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
