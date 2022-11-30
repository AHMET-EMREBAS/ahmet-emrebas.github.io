/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

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

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const errorResponse = {};
        errors.forEach((e) => {
          errorResponse[e.property] = e.constraints;
        });

        throw new BadRequestException(errorResponse);
      },
      validationError: { target: false, value: false },
    })
  );

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
