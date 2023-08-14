import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import fastifyHelmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    { cors: true },
  );

  const configService = app.get(ConfigService);
  const PORT = Number(configService.get('PORT')) || 3000;

  app.useGlobalPipes(new ValidationPipe());
  await app.register(fastifyHelmet);
  app.setGlobalPrefix('api');

  await app.listen(PORT);
  Logger.log(
    `Application is running on: http://localhost:${PORT}/api`,
    'Bootstrap',
  );
}
bootstrap();
