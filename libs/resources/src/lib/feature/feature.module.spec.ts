import { Test, TestingModule } from '@nestjs/testing';
import { MockDbWithEntities } from '@techbir/core';
import { Feature } from '@techbir/entities';
import { FeatureController } from './feature.controller';
import { FeatureService } from './feature.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('Feature Module', () => {
  let app: TestingModule;
  let service: FeatureService;
  let controller: FeatureController;
  let repo: Repository<Feature>;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [...MockDbWithEntities('feature', [Feature])],
      controllers: [FeatureController],
      providers: [FeatureService],
    }).compile();

    app = await app.init();

    service = app.get(FeatureService);
    repo = app.get(getRepositoryToken(Feature));
    controller = app.get(FeatureController);
  });

  it.each`
    name                           | value
    ${FeatureService.name}         | ${FeatureService}
    ${FeatureController.name}      | ${FeatureController}
    ${Feature.name + 'Repository'} | ${getRepositoryToken(Feature)}
  `('$name should be defined', ({ value }) => {
    expect(app.get(value)).toBeDefined();
  });
});
