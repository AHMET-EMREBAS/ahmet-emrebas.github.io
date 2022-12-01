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
  const port = process.env.PORT || 3333;

  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Project Name')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use(favicon(join(__dirname, 'favicon.ico')));
  app.use(cookieParser());
  app.useGlobalPipes(GlobalValidationPipe);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
