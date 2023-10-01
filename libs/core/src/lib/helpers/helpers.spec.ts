import * as request from 'supertest';
import { Test } from '@nestjs/testing';

import { Controller, INestApplication, Injectable } from '@nestjs/common';
import { MockDbWithEntities } from './mockdb';
import { Entity } from '../orm';
import { BaseEntity } from '../base';
import { InjectRepository, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceService, createController } from '../restgraph';
import { PubSub } from 'graphql-subscriptions';
import { QueryDto } from '../dtos';
import { Column } from '../column';
import { Property } from '../property';

@Entity()
class Sample extends BaseEntity {
  @Property({ type: 'string', minLength: 3, maxLength: 30 })
  @Column({ type: 'string' })
  name?: string;
}

@Injectable()
class SampleService extends ResourceService {
  constructor(@InjectRepository(Sample) repo: Repository<Sample>) {
    super(repo, repo);
  }
}

@Controller()
class SampleController extends createController({
  createDto: Sample,
  entity: Sample,
  pubSub: new PubSub(),
  queryDto: QueryDto,
  updateDto: Sample,
  view: Sample,
}) {
  constructor(service: SampleService) {
    super(service);
  }
}

describe('Helpers', () => {
  let app: INestApplication;
  let controller: SampleController;
  let service: SampleService;
  let repo: Repository<Sample>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [...MockDbWithEntities('helpers', [Sample])],
      controllers: [SampleController],
      providers: [SampleService],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();

    controller = app.get(SampleController);
    service = app.get(SampleService);
    repo = app.get(getRepositoryToken(Sample));
  });

  it('should initialize controller', () => {
    expect(controller).toBeTruthy();
  });

  it('should initialize service', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize repository', () => {
    expect(repo).toBeTruthy();
  });

  it(`/GET samples`, async () => {
    const foundItems = await service.findAll({});
    return request(app.getHttpServer())
      .get('/samples')
      .expect(200)
      .expect(foundItems);
  });

  it(`/Get sample/:id`, async () => {
    const server = request(app.getHttpServer());

    await service.save({ name: 'some name' });

    const foundItem = await service.findOneById(1);
    expect(foundItem.name).toBe('some name');

    return server
      .get('/sample/1')
      .expect(200)
      .then((res) => {
        const { body } = res;
        expect(JSON.stringify(body)).toBe(JSON.stringify(foundItem));
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
