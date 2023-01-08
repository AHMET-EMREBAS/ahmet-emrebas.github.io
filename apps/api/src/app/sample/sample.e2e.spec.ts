import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { SampleModule } from './sample.module';
import { SampleService } from './sample.service';

describe(SampleModule.name, () => {
  let app: INestApplication;
  const sampleService = {
    find: () => ['done'],
    findById: () => ['done'],
    save: () => ['done'],
    update: () => ['done'],
    delete: () => ['done'],
    count: () => ['done'],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'dist/test/test.sample.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        SampleModule,
      ],
      providers: [SampleService],
    })
      .overrideProvider(SampleService)
      .useValue(sampleService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET sample`, () => {
    return request(app.getHttpServer())
      .get('/sample')
      .expect(200)
      .expect(sampleService.find());
  });

  it(`/GET sample/:id`, () => {
    return request(app.getHttpServer())
      .get('/sample/1')
      .expect(200)
      .expect(sampleService.findById());
  });

  it(`/POST sample`, () => {
    return request(app.getHttpServer())
      .post('/sample')
      .expect(201)
      .expect(sampleService.save());
  });

  it(`/UPDATE sample/:id`, () => {
    return request(app.getHttpServer())
      .put('/sample/1')
      .expect(200)
      .expect(sampleService.update());
  });

  it(`/DELETE sample/:id`, () => {
    return request(app.getHttpServer())
      .delete('/sample/1')
      .expect(200)
      .expect(sampleService.delete());
  });

  afterAll(async () => {
    await app.close();
  });
});
