/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import * as favicon from 'serve-favicon';

import { GlobalValidationPipe } from '@ae/core';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors();

  const port = process.env.PORT || 3333;

  app.use(cookieParser());
  app.useGlobalPipes(GlobalValidationPipe);
  app.use(favicon(join(__dirname, 'favicon.ico')));

  const config = new DocumentBuilder()

    .setTitle('Api Document')
    .setDescription('Api Document ')
    .setContact(
      'Ahmet Emrebas',
      'https://ahmet-emrebas.github.io',
      'aemrebas.dev@gmail.com'
    )
    .setVersion('1.0.0')
    .setLicense('Commerciel', 'https://ahmet-emrebas.github.io')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
