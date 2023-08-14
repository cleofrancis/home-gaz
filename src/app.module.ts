import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { NewsLettersService } from './news-letter.service';
import { newsLettersProviders } from './users/news-letter.providers';
import { DatabaseModule } from './database/database.modules';
import { ConfigModule } from '@nestjs/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), '..', '.env'),
      isGlobal: true,
    }),
    CoreModule,
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api/(.*)'],
    }),
    UsersModule,
    StoresModule,
  ],
  controllers: [AppController],
  providers: [AppService, NewsLettersService, ...newsLettersProviders],
})
export class AppModule {}
